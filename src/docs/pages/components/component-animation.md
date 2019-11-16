---
title: Component - Animation
menu_label: Component - Animation
layout: documentation
category: Components
markup_language: html
relative_path: components/component-animation
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Animation</h1>
      <div class="tabs rounded">
        <div class="tab-nav button-nav left">
          <a href="#tabs-1-pane-1" class="button border-b border-2 active bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Requirements</a>
          <a href="#tabs-1-pane-2" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">API</a>
          <a href="#tabs-1-pane-3" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">CallBacks</a>
          <a href="#tabs-1-pane-4" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Classes &amp; Data Attributes</a>
        </div>
        <div class="tab-panes px-0 rounded rounded-sm-b border-transparent">
          <div id="tabs-1-pane-1" class="active animate-in">
            <div class="tab-content">
              <p class="mb-0">The horizon component requires <code class="color-indigo font-bold">_tm.horizon.js</code>. Tabs are by default imported in <code class="color-indigo font-bold">_tm.core.js</code>, which means creating an instance of the core creates an instance of the horizon component. To exclude horizons, open<code class="color-indigo font-bold">_tm.core.js</code> and comment <code class="color-indigo font-bold">import tmTabs from './components/_tm.horizon.js';</code>.</p>
            </div>
          </div>
          <div id="tabs-1-pane-2">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Method </th>
                      <th> Example </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">initialize()</th>
                      <td> Initializes the plugin. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">refresh()</th>
                      <td> Refreshes the plugin. Useful when new elements have been added to the page. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">destroy()</th>
                      <td> Destroys the instance of the plugin. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
              <!-- code -->
              <h6 class="uppercase">As a standalone plugin</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let horizon = new tmHorizon('.horizon');
horizon.method();
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.horizon.method();
--></code></pre>
              </div>
              <!-- code -->
            </div>
          </div>
          <div id="tabs-1-pane-3">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Callback </th>
                      <th> Value </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">initialized: function(){}</th>
                      <td> Called once plugin has been initialized. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">elementVisible: function(){}</th>
                      <td> Called once the element is visible and animated. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">destroyed: function(){}</th>
                      <td> Called once plugin has been destroyed. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
              <!-- code -->
              <h6 class="uppercase">As a standalone plugin</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let horizon = new tmHorizon('.horizon',{
	callback:function(){}
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.horizon.settings.callback = function(){};
--></code></pre>
              </div>
              <!-- code -->
            </div>
          </div>
          <div id="tabs-1-pane-4">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Classes &amp; Data Attributes </th>
                      <th> Description </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">.horizon</th>
                      <td> Class for which the horizon instance is created. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">.in-view</th>
                      <td> Class added to horizon parent when horizon element is physically visible in the viewport. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-animate-in</th>
                      <td> Used to define the animate attributes for the element. Added to div.horizon. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Animation Presets</h3>
        <p>Use the animation presets to quickly animate an element as it enters the viewport, or, define custom animation attributes.</p>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:fadeIn;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:fadeIn</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:slideInUpShort;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInUpShort</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:slideInRightShort;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInRightShort</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:slideInDownShort;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInDownShort</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:slideInLeftShort;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInLeftShort</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:slideInUpLong;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInUpLong</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:slideInRightLong;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInRightLong</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:slideInDownLong;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInDownLong</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:slideInLeftLong;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInLeftLong</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:bounceIn;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:bounceIn</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:bounceOut;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:bounceOut</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:bounceInUp;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:bounceInUp</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:bounceInRight;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:bounceInRight</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:bounceInDown;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:bounceInDown</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:bounceInLeft;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:bounceInLeft</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:scaleIn;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:scaleIn</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:scaleOut;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:scaleOut</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:flipInX;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:flipInX</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:flipInY;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:flipInY</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:spinInX;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:spinInX</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:spinInY;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:spinInY</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:helicopterIn;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:helicopterIn</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:helicopterOut;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:helicopterOut</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:signSwingTop;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:signSwingTop</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:signSwingRight;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:signSwingRight</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:signSwingBottom;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:signSwingBottom</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:signSwingLeft;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:signSwingLeft</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:wiggleX;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:wiggleX</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:wiggleY;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:wiggleY</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:dropUp;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:dropUp</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:dropDown;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:dropDown</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:rollInLeft;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:rollInLeft</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:rollInRight;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:rollInRight</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:turnInLeft;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:turnInLeft</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:turnInRight;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:turnInRight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:fadeIn;duration:500ms;delay:200ms;" data-threshold="1">
	<div class="mx-auto">
		<p>preset:fadeIn</p>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Custom Animation</h3>
        <p>Define a custom animation of an element by specifying one or multiple of the following attributes using the <code class="color-indigo font-bold">data-animate-in</code> attribute:</p>
        <ul>
          <li>width: {x}px or %</li>
          <li>height: {x}px or %</li>
          <li>opacity: {x}</li>
          <li>transX: {x}px</li>
          <li>transY: {x}px</li>
          <li>transZ: {x}px</li>
          <li>rotateX: {x}px</li>
          <li>rotateY: {x}px</li>
          <li>rotateZ: {x}px</li>
          <li>scale: {x}</li>
          <li>transOrigX: {x}px</li>
          <li>transOrigY: {x}px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row">
            <div class="col w-4/12 center">
              <div class="card rounded size-xl shadow bg-grey-darkest color-white horizon" data-animate-in="height:300px;duration:500ms;delay:200ms;" data-threshold="0">
                <div class="mx-auto">
                  <p>height: 300px</p>
                </div>
              </div>
            </div>
            <div class="col w-4/12 center">
              <div class="card rounded size-xl shadow bg-grey-dark color-white horizon" data-animate-in="transY:-100px;scale:0.5;width:100%;duration:500ms;delay:200ms;easing:easeInOutQuint;" data-threshold="1">
                <div class="mx-auto">
                  <p>width: 100%;<br>transX:-200px;<br>scale:0.5;</p>
                </div>
              </div>
            </div>
            <div class="col w-4/12 center">
              <div class="card rounded size-xl shadow bg-grey-dark color-white horizon" data-animate-in="width:100%;height:100%;duration:500ms;delay:200ms;" data-threshold="1">
                <div class="mx-auto">
                  <p>width:100%;<br>height:100%;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="card rounded size-xl shadow bg-grey-darkest color-white horizon" data-animate-in="height:300px;duration:500ms;delay:200ms;" data-threshold="1">
	<div class="mx-auto">
		<p>height: 300px</p>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
    <!-- Sidebar -->
    <aside id="collapsable-sidebar" class="col w-3/12 w-md-full order-1 sidebar left collapsable-target active-md inactive-md overflow-visible overflow-md-hidden">
      <div class="freeze pb-30 pst-100" data-extra-space-top="100" data-extra-space-bottom="0" data-push-section=".pagination-3">
        <div class="pb-30 border-md border-md-b border-md-2 border-grey-lightest">
          <div class="h-screen h-md-auto overflow-y-scroll">
            <h4 class="color-black">Getting Started</h4>
            <ul class="list-none">
              <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../getting-started-timber.html">Introduction</a></li>
              <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../getting-started-installation.html">Installation &amp; Build Process</a></li>
              <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../getting-started-javascript.html">JavaScript</a></li>
              <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../getting-started-theming.html">Theming</a></li>
              <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../getting-started-file-size.html">Managing File Size</a></li>
            </ul>
            <h4 class="mt-0"><a href="#collapsable-utilities" class="collapsable color-grey-dark color-active-black" data-include-margin="">Utilities <span class="icon-material mb-0">keyboard_arrow_down</span></a></h4>
            <div id="collapsable-utilities" class="collapsable-target">
              <div class="pb-10">
                <h6 class="uppercase tracking-wide">Layout</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/layout-flexbox.html">Flexbox</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/layout-css-grid.html">CSS Grid</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/layout-display.html">Display</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/layout-float.html">Float</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/layout-overflow.html">Overflow</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/layout-position.html">Position</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/layout-visibility.html">Visibility</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/layout-zindex.html">Z-Index</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Typography</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/typography-font-family.html">Font Family</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/typography-font-size.html">Font Size</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/typography-font-style.html">Font Style</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/typography-font-weight.html">Font Weight</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/typography-letter-spacing.html">Letter Spacing</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/typography-line-height.html">Line Height</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/typography-text-align.html">Text Align</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/typography-text-decoration.html">Text Decoration</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/typography-text-transform.html">Text Transform</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/typography-vertical-align.html">Vertical Align</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/typography-whitespace.html">Whitespace</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/typography-wordbreak.html">Word Break</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Background</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/background-attachment.html">Background Attachment</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/background-position.html">Background Position</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/background-repeat.html">Background Repeat</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/background-size.html">Background Size</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Border</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/border-radius.html">Border Radius</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/border-style.html">Border Style</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/border-width.html">Border Width</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Spacing</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/spacing-padding.html">Padding</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/spacing-margin.html">Margin</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Sizing</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/sizing-width.html">Width</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/sizing-height.html">Height</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Color</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/color-background.html">Background Color</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/color-border.html">Border Color</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/color.html">Font Color</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Effects</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/effects-box-shadow.html">Box Shadow</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/effects-opacity.html">Opacity</a></li>
                </ul>
                <h6 class="uppercase tracking-wide">Interactivity</h6>
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/interactivity-cursor.html">Cursor</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/interactivity-pointer-events.html">Pointer Events</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/interactivity-resize.html">Resize</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../utilities/interactivity-select.html">Select</a></li>
                </ul>
              </div>
            </div>
            <h4 class="mt-0"><a href="#collapsable-components" class="collapsable color-grey-dark color-active-black" data-include-margin="">Components <span class="icon-material mb-0">keyboard_arrow_down</span></a></h4>
            <div id="collapsable-components" class="collapsable-target">
              <div class="pb-10">
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-accordion.html">Accordion</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-animation.html">Animation</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-badge.html">Badge</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-button.html">Button</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-card.html">Card</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-collapsable.html">Collapsable</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-dropdown.html">Dropdown</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-form.html">Forms</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-grid.html">Grid</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-lightbox.html">Lightbox</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-list.html">List Group</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-overlay-navigation.html">Overlay Navigation</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-pagination.html">Pagination</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-parallax.html">Parallax</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-pricing-table.html">Pricing Table</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-progress-bar.html">Progress Bar</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-progressline.html">Progressline</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-scroll-to.html">Scroll To</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-side-navigation.html">Side Navigation</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-table.html">Table</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-tabs.html">Tabs</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-thumbnail.html">Thumbnail</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../components/component-video.html">Video</a></li>
                </ul>
              </div>
            </div>
            <h4 class="mt-0"><a href="#collapsable-partials" class="collapsable color-grey-dark color-active-black" data-include-margin="">Blocks <span class="icon-material mb-0">keyboard_arrow_down</span></a></h4>
            <div id="collapsable-partials" class="collapsable-target">
              <div class="pb-10">
                <ul class="list-none">
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../blocks/block-contact-form.html">Contact Form</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../blocks/block-masonry-grid.html">Masonry Grid</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../blocks/block-feature.html">Feature</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../blocks/block-footer.html">Footer</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../blocks/block-header.html">Header</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../blocks/block-heros.html">Heros</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../blocks/block-login.html">Login</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../blocks/block-logo-grid.html">Logo Grid</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../blocks/block-register.html">Register</a></li>
                  <li><a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../blocks/block-subscription-form.html">Subscription Form</a></li>
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