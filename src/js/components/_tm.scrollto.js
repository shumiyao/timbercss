// Copyright © UnlimitDesign 2019
// Plugin: Scroll To 
// Version: 1.0.3
// URL: @UnlimitDesign
// Author: UnlimitDesign, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities
import classList from '../utilities/_chaining.js';
import polyfill from '../utilities/_smoothscrollpolyfill.js';
import tmInView from '../utilities/_tm.inview.js';
import passiveSupported from '../utilities/_passivesupported.js';

const tmScrollTo = (function () {

  'use strict';

  if (typeof navigator == 'undefined' || typeof document == 'undefined' || typeof window == 'undefined') return false;

  // Check for mobile device and determine event type
  let mobile = false;
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) ||  navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ||  navigator.userAgent.match(/BlackBerry/i) ||  navigator.userAgent.match(/Windows Phone/i) ) mobile = true;
  
  // Check event type
  const eventType = mobile ? 'touchstart' : 'click';

  // Set the plugin defaults
  const defaults = {
    scrollBehaviour: 'smooth',
    navItemClass: 'nav-item',
    swapActiveClass: 'swap-active',
    initialized: function(){},      // Callback - scrolling initialized
    doneScrolling: function(){},    // Callback - scroling done - works only with window
    destroyed: function(){}         // Callback - scrolling destroyed
  };
  
  /**
  * Constructor.
  * @param  {element}  element  The selector element(s).
  * @param  {object}   options  The plugin options.
  */
  function ScrollTo(element, options) {
    
    // Create an empty plugin object
    let plugin = {};

    // InView instance
    let sectionInView;
    let sectionArray = [];

    // Get defaults and merge with user options
    try{
      plugin.this = this;
      plugin.elements = element;
      plugin.defaults = defaults;
      plugin.options = options;
      plugin.settings = Object.assign({}, defaults, options);
    }catch(error){
      console.log(`${error} - format must be: let x = new tmScrollTo('.selector' or NodeList,{options})`);
    }

    /**
    * Initiate scroll event
    */
    const initiateScroll = () => {
      if(event.target.tagName === 'A') event.preventDefault();

      // Defines some variales
      let scrollType = event.target.dataset.scrollType;
      let element = event.target.tagName == 'A' ? event.target.href.substring(event.target.href.indexOf('#')) : event.target.dataset.target;
      let buffer = event.target.dataset.buffer ? parseInt(event.target.dataset.buffer,10) : 0;
      let amountX = event.target.dataset.scrollX == 'targetOffset' ? document.querySelector(element).offsetLeft + buffer : event.target.dataset.scrollX ? parseInt(event.target.dataset.scrollX,10) : 0;
      let amountY = event.target.dataset.scrollY == 'targetOffset' ? document.querySelector(element).offsetTop + buffer : event.target.dataset.scrollY ? parseInt(event.target.dataset.scrollY,10) : 0;
      let windowScroll = true;

      // Update window URL
      if(event.target.hasAttribute('data-update-url')) history.pushState({extraData: `Section ${element}`}, '', element);

      // Switch based on scroll types
      try{  
        switch(scrollType){

          case 'window-scroll-to':

            window.scrollTo({top: amountY, left: amountX, behavior: plugin.settings.scrollBehaviour});

          break;

          case 'window-scroll-by':

            window.scrollBy({top: amountY, left: amountX, behavior: plugin.settings.scrollBehaviour});
          
          break;

          case 'element-scroll-to':

            document.querySelector(element).scroll({top: amountY, left: amountX, behavior: plugin.settings.scrollBehaviour});
            windowScroll = false;

          break;

          case 'element-scroll-by':

            document.querySelector(element).scrollBy({top: amountY, left: amountX, behavior: plugin.settings.scrollBehaviour});
            windowScroll = false;

          break;

          case 'element-scroll-into-view':

            document.querySelector(element).scrollIntoView({behavior: plugin.settings.scrollBehaviour});
            windowScroll = false;
            
          break;

          default:

            console.log(`Check that scroll type is defined properly: ${scrollType}`);
        }
      }catch(error){
        console.log(`${error} - Check that section exists: ${element}`);
      }

      // Check if scrolling is done
      scrollingDone(amountY,amountX, windowScroll);

      // Update nav state
      updateNavigationState(false, event.target);
    };

    /**
    * Check when scrolling has completed
    * @param  {number}  number  Amount to scroll on y axis.
    * @param  {number}  number  Amount to scroll on x axis.
    * @param  {boolean}  boolean  Window scrolling or element.
    */
    const scrollingDone = (amountY, amountX, windowScroll) => {
      
      let scrollDoneTimer;
      let winYPos = window.scrollY;
      let winXPos = window.scrollX;
      let newWinYPos = winYPos + amountY;
      let newWinXPos = winXPos + amountX;
      let scrollY = window.scrollY != amountY || window.scrollY != newWinYPos ? true : false;
      let scrollX = winXPos != amountX || winXPos != newWinXPos ? true : false;

      // Clear timeout
      clearTimeout(scrollDoneTimer);

      // Set timeout
      scrollDoneTimer = setTimeout(function checkPosition() {
        if(windowScroll){
          scrollDoneTimer = setTimeout(checkPosition, 200);
          if(scrollY){
            if(window.scrollY == amountY || window.scrollY == newWinYPos){
              clearTimeout(scrollDoneTimer);

              // Callback
              plugin.settings.doneScrolling();
            }
          }else if(scrollX){
            if(winXPos == amountX || winXPos == newWinXPos){
              clearTimeout(scrollDoneTimer);

              // Callback
              plugin.settings.doneScrolling();
            }
          }
        }
      }, 200);
    };

    /**
    * Observe sections 
    */
    const observeSections = () => {

      // Create instance of inView to observe sections
      // upon entering the viewport
      sectionInView = new tmInView(sectionArray,{
        unObserveViewed: false,
        detectionBuffer: 0,
        inView: function(visibleSection){
          updateNavigationState(visibleSection);
          classList(visibleSection).addClass('active');
        },
        outOfView: function(hiddenSection){
          updateNavigationState(hiddenSection);
          classList(hiddenSection).removeClass('active');
        }
      });
      sectionInView.initialize();
    };

    /**
    * Update nav link
    * @param  {object}  element  The current section in or out of view.
    */
    const updateNavigationState = (section, navItem) => {
      if(section){
        navItem = document.querySelector(`a[href="#${section.id}"]`) ? document.querySelector(`a[href="#${section.id}"]`) : document.querySelector(`[data-target="#${section.id}"]`);
        if(section.classList.contains('out-of-view')){
          classList(navItem).removeClass('active');
        }else{
          classList(navItem).addClass('active');
        }
      }else{
        let swapActive = navItem.classList.contains(plugin.settings.swapActiveClass) ? plugin.settings.swapActiveClass : navItem.dataset.swapActive;
        document.querySelectorAll(`.${swapActive}`).forEach(function(element){
          classList(element).removeClass('active');
        });
        classList(event.target).addClass('active');
      }
    };

    /**
    * Public variables and methods.
    */

    /**
    * Initialize the plugin.
    */
    plugin.initialize = () => {

      if(plugin.elements == null) return false;

      // Kick off the polyfill!
      polyfill();

      // Get nav elements length
      let navItemLength = document.querySelectorAll(plugin.elements + `.${plugin.settings.navItemClass}`).length;
      let i = 0;

      // Add link event 
      document.querySelectorAll(plugin.elements).forEach(function(element){
        let eventOptions = eventType == 'click' ? false : passiveSupported() && element.tagName != 'A' ? {passive: true} : {passive: false};
        element.addEventListener(eventType, initiateScroll, eventOptions);
        
        // Find associated nav items
        let isNavItem = element.classList.contains(plugin.settings.navItemClass);
        if(isNavItem){
          i++;

          // Get referenced section and observe it
          element.tagName == 'A' ? sectionArray.push(element.href.substring(element.href.indexOf('#'))) : sectionArray.push(element.dataset.target);
          if(i == navItemLength) observeSections(sectionArray);
        }
      });

      // Callback
      plugin.settings.initialized();
    };

    /**
    * Refresh the plugin.
    */
    plugin.refresh = () => {
      // Destroy the existing initialization
      plugin.destroy();

      // Initialize the plugin
      plugin.settings = Object.assign({}, defaults, options);
      plugin.initialize();
    };

    /**
    * Destroy an existing initialization.
    */
    plugin.destroy = () => {

      if ( !plugin.settings ) return;

      // Remove link event
      document.querySelectorAll(plugin.elements).forEach(function(element){
        element.removeEventListener(eventType, initiateScroll, false);
      });

      // Remove inView instance from sections
      if(sectionInView != undefined) sectionInView.destroy();
        
      // Callback
      plugin.settings.destroyed();

      // Reset variables
      plugin.settings = null;
    };

    // Return API
    return plugin;
  }
  
  // Return the plugin
  return ScrollTo;
})();

// Export the plugin
export default tmScrollTo;