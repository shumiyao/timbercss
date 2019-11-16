---
title: JavaScript
menu_label: JavaScript
layout: documentation
category: Getting Started
markup_language: html
relative_path: getting-started-javascript
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">JavaScript</h1>
      <p class="text-large">Timber offers a range of components and plugins, many of which require JavaScript to function.</p>
      <p>You can either include the entire Timber core, or, if you prefer, and only require a few plugins, include the ones you need. Note that Timber plugins do not require jQuery or any other library to function, they are all written in Vanilla JavaScript. The only files you will need to modify when it comes to JavaScript are <code class="color-indigo font-bold">_tm.core.js</code> and <code class="color-indigo font-bold">custom.js</code></p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--your-project/
├── js
│   └── components
│	└── plugins
│	└── utilities
│	└── _tm.core.js
│	└── custom.js --></code></pre>
      </div>
      <!-- code -->
      <h5>Removing plugins from the core</h5>
      <p>To remove JavaScript plugins from the core, open <code class="color-indigo font-bold">_tm.core.js</code> and simply comment the plugins you do not need. Once you run the build command, these plugins will be exluded.</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--// Components
//import tmAccordion from './components/_tm.accordion.js';
//import tmTabs from './components/_tm.tabs.js';
//mport tmCollapsable from './components/_tm.collapsable.js';
import tmRollover from './components/_tm.rollover.js';
import tmDismissable from './components/_tm.dismissable.js';
import tmDropdown from './components/_tm.dropdown.js';
import tmScrollTo from './components/_tm.scrollto.js';
import tmSideNavigation from './components/_tm.sidenavigation.js';
import tmOverlayNavigation from './components/_tm.overlaynavigation.js';
import tmToggleSubMenu from './components/_tm.togglesubmenu.js';

// Plugins
/*import tmMasonryGrid from './plugins/_tm.masonrygrid.js';
import tmFreeze from './plugins/_tm.freeze.js';
import tmStickyHeader from './plugins/_tm.stickyheader.js';
import tmLightbox from './plugins/_tm.lightbox.js';
import tmHorizon from './plugins/_tm.horizon.js';
import tmParallax from './plugins/_tm.parallax.js';
import tmResponsiveVideo from './plugins/_tm.responsivevideo.js';*/--></code></pre>
      </div>
      <!-- code -->
      <h5>Writing custom JS</h5>
      <p>To add your own JS to Timber, open <code class="color-indigo font-bold">scustom.js</code> and add or import your modules after the initialization of the Timber core.</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--// Core
import timberCore from './_tm.core.js';

// Core instance
let timber = new timberCore({
	initialize: false
});

// Initialize all imported modules
// Or intialize a select number of modules as follows:
// timber.module.moduleName.initialize();
// For callbacks: timber.module.moduleName.settings.callback = function(){};
// console.log(timber.module.moduleName.settings) for module settings
if (typeof timber.initialize != 'undefined') {
	timber.initialize();
}

// Add your JS here
--></code></pre>
      </div>
      <!-- code -->
      <h5>Fallbacks when JavaScript is disabled</h5>
      <p>Timber's plugins do not provide a fallback for when JavaScript is disabled because 98% of users have JavaScript enabled. If you care about the user experience when JavaScript is disabled, use <code class="color-indigo font-bold">noscript</code> tag and let your users know and how to re-enable JavaScript and/or add your own custom fallbacks.</p>
      <hr class="mt-50">
      <a href="getting-started-theming.html" title="Next Page" class="pagination-link button border-none flex flex-row-reverse justify-start justify-sm-between w-auto pr-0 m-0 right bg-transparent bg-hover-transparent left-sm color-grey color-hover-grey-darkest">
        <span class="icon-material mr-0 ml-10">chevron_right</span>
        <span class="mt-0 mr-20">
          <span class="leading-none text-tiny uppercase">Next</span>
          <span class="block text-large">Theming</span>
        </span>
      </a>
    </div>
    <!-- Content Inner End -->
    <!-- Sidebar -->
    <aside id="collapsable-sidebar" class="col w-3/12 w-md-full order-1 sidebar left collapsable-target active-md inactive-md overflow-visible overflow-md-hidden">
      <div class="freeze pb-30 pst-100" data-extra-space-top="100" data-extra-space-bottom="0" data-push-section=".pagination-3">
        <div class="pb-30 border-md border-md-b border-md-2 border-grey-lightest">
          <div class="h-screen h-md-auto overflow-y-scroll">
            <h4 class="color-black">Getting Started</h4>
            <ul class="list-none">
              <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="getting-started-timber.html">Introduction</a></li>
              <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="getting-started-installation.html">Installation &amp; Build Process</a></li>
              <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="getting-started-javascript.html">JavaScript</a></li>
              <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="getting-started-theming.html">Theming</a></li>
              <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="getting-started-file-size.html">Managing File Size</a></li>
            </ul>
            <h4 class="mt-0"><a href="#collapsable-utilities" class="collapsable color-grey-dark color-active-black" data-include-margin="">Utilities <span class="icon-material mb-0">keyboard_arrow_down</span></a></h4>
            <div id="collapsable-utilities" class="collapsable-target">
              <div class="pb-10">
                <h6 class="uppercase tracking-wide">Layout</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/layout-flexbox.html">Flexbox</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/layout-css-grid.html">CSS Grid</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/layout-display.html">Display</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/layout-float.html">Float</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/layout-overflow.html">Overflow</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/layout-position.html">Position</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/layout-visibility.html">Visibility</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/layout-zindex.html">Z-Index</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Typography</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/typography-font-family.html">Font Family</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/typography-font-size.html">Font Size</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/typography-font-style.html">Font Style</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/typography-font-weight.html">Font Weight</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/typography-letter-spacing.html">Letter Spacing</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/typography-line-height.html">Line Height</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/typography-text-align.html">Text Align</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/typography-text-decoration.html">Text Decoration</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/typography-text-transform.html">Text Transform</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/typography-vertical-align.html">Vertical Align</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/typography-whitespace.html">Whitespace</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/typography-wordbreak.html">Word Break</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Background</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/background-attachment.html">Background Attachment</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/background-position.html">Background Position</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/background-repeat.html">Background Repeat</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/background-size.html">Background Size</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Border</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/border-radius.html">Border Radius</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/border-style.html">Border Style</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/border-width.html">Border Width</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Spacing</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/spacing-padding.html">Padding</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/spacing-margin.html">Margin</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Sizing</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/sizing-width.html">Width</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/sizing-height.html">Height</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Color</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/color-background.html">Background Color</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/color-border.html">Border Color</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/color.html">Font Color</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Effects</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/effects-box-shadow.html">Box Shadow</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/effects-opacity.html">Opacity</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Interactivity</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/interactivity-cursor.html">Cursor</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/interactivity-pointer-events.html">Pointer Events</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/interactivity-resize.html">Resize</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="utilities/interactivity-select.html">Select</a></li>
                </ul>
              </div>
            </div>
            <h4 class="mt-0"><a href="#collapsable-components" class="collapsable color-grey-dark color-active-black" data-include-margin="">Components <span class="icon-material mb-0">keyboard_arrow_down</span></a></h4>
            <div id="collapsable-components" class="collapsable-target">
              <div class="pb-10">
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-accordion.html">Accordion</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-animation.html">Animation</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-badge.html">Badge</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-button.html">Button</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-card.html">Card</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-collapsable.html">Collapsable</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-dropdown.html">Dropdown</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-form.html">Forms</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-grid.html">Grid</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-lightbox.html">Lightbox</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-list.html">List Group</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-overlay-navigation.html">Overlay Navigation</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-pagination.html">Pagination</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-parallax.html">Parallax</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-pricing-table.html">Pricing Table</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-progress-bar.html">Progress Bar</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-progressline.html">Progressline</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-scroll-to.html">Scroll To</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-side-navigation.html">Side Navigation</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-table.html">Table</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-tabs.html">Tabs</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-thumbnail.html">Thumbnail</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="components/component-video.html">Video</a></li>
                </ul>
              </div>
            </div>
            <h4 class="mt-0"><a href="#collapsable-partials" class="collapsable color-grey-dark color-active-black" data-include-margin="">Blocks <span class="icon-material mb-0">keyboard_arrow_down</span></a></h4>
            <div id="collapsable-partials" class="collapsable-target">
              <div class="pb-10">
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="blocks/block-contact-form.html">Contact Form</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="blocks/block-masonry-grid.html">Masonry Grid</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="blocks/block-feature.html">Feature</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="blocks/block-footer.html">Footer</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="blocks/block-header.html">Header</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="blocks/block-heros.html">Heros</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="blocks/block-login.html">Login</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="blocks/block-logo-grid.html">Logo Grid</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="blocks/block-register.html">Register</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="blocks/block-subscription-form.html">Subscription Form</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <!-- Sidebar End -->
  </div>
</div>