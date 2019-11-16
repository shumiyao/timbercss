---
title: Partial - Masonry Ggrid
menu_label: Partial - Masonry Ggrid
layout: documentation
category: Blocks
markup_language: html
relative_path: blocks/block-masonry-grid
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Block: Masonry Ggrid</h1>
      <p>Masonry grids are built upon CSS grids. Use the CSS grid utility classes to variate grid item sizes (read more <a href="../utilities/layout-css-grid.html">here</a>.) The masonry grid plugin is used to calculate fixed width/height of each grid item in a CSS grid to ensure that they line up perfectly in a masonry formation. It also provides the possibility to lazyload each grid item as they enter to viewport to reduce unecessary prealoding of images by the browser.</p>
      <div class="tabs rounded">
        <div class="tab-nav button-nav left">
          <a href="#tabs-1-pane-1" class="button border-b border-2 active bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Requirements</a>
          <a href="#tabs-1-pane-2" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">API</a>
          <a href="#tabs-1-pane-3" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">CallBacks</a>
          <a href="#tabs-1-pane-4" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Classes &amp; Data Attibutes</a>
        </div>
        <div class="tab-panes px-0 rounded rounded-sm-b border-transparent">
          <div id="tabs-1-pane-1" class="active animate-in">
            <div class="tab-content">
              <p class="mb-0">The masonry grid plugin requires <code class="color-indigo font-bold">_tm.masonrygrid.js</code>. The masonry grid plugin is by default imported in <code class="color-indigo font-bold">_tm.core.js</code>, which means creating an instance of the core creates an instance of the masonry grid plugin. To exclude masonry grids, open<code class="color-indigo font-bold">_tm.core.js</code> and comment <code class="color-indigo font-bold">import tmMasonryGrid from './plugins/_tm.masonrygrid.js';</code>.</p>
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
                      <th class="color-indigo">updateGridItemSizes()</th>
                      <td> Recalculates grid item heights. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">refresh()</th>
                      <td> Refreshes the plugin. Useful when new grid items have been added to the grid. </td>
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
                <pre class="m-0 language-html"><code class="inline-block scrolling-touch">let masonrygrid = new tmMasonryGrid();<br>masonrygrid.method();
</code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-html"><code class="inline-block scrolling-touch">timber.masonrygrid.method();
</code></pre>
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
                      <th class="color-indigo">gridItemLoaded: function(){}</th>
                      <td> Called after a grid item is loaded. </td>
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
                <pre class="m-0 language-html"><code class="inline-block scrolling-touch">let masonrygrid = new tmMasonryGrid({<br>    callback:function(){}<br>});
</code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-html"><code class="inline-block scrolling-touch">timber.module.masonrygrid.settings.callback = function(){};
</code></pre>
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
                      <th> Callback </th>
                      <th> Value </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">.preload</th>
                      <td> A masonry grid instance is created for .grid.preload to avoid the plugin from preloading every CSS grid. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-set-grid-item-height</th>
                      <td> Determines whether the plugin should calculate and set height of grid items. Takes no value. Added to div.grid. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-grid-ratio</th>
                      <td> Determines the grid item ratio which is used to calculate height of grid items. Takes decimal values, defaults to 1.5. Has not effect unless data-set-grid-item-height is added to the grid as well. Attribute added to div.grid. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-as-bg-imgs</th>
                      <td> Sets the preloaded images as background images to grid items. This ensures that images take the full width/height of their parents no matter the grid ratio. Attribute added to div.grid. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-src</th>
                      <td> Defines the image to be preloaded. To ensure lazyloading, use data-src on any img tag added to a grid item. Specify the image URL to be loaded using data-src and set the img tag src to either blank or data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs= </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
            </div>
          </div>
        </div>
      </div>
      <!-- Masonry Grid -->
      <div class="row mt-80 mx-0">
        <h3 class="font-light">As Regular Images</h3>
        <div id="grid-example" class="col w-full p-0 grid preload grid-cols-3 grid-md-cols-2 grid-sm-cols-1" data-set-grid-item-height="" data-grid-ratio="1.5">
          <div class="grid-item grid-sizer category-1 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1558369178-6556d97855d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item span-cols-2 span-rows-2 category-1 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1552640195-a7c44126dc5f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-2 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1552688468-d87e6f7a58f2?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item span-rows-2 category-3 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1552644217-0a96ef16a2a5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-2 category-3 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1552638293-ba420e6fbf12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-1 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1552608621-811cde5dcb4c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-3 span-rows-2 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1552637704-7a23c20ab149?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-1 span-rows-2 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1552598810-e76dd2eb05e1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-2 category-4 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1552613545-385e15ea6af6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item span-cols-2 span-rows-3 category-1 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1562051991-61fc474d64a3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=944&amp;q=80" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-2 category-4 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1558709995-98a2f442ecca?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-2 category-4 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1562004736-6704d0518d24?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-2 category-4 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1561982956-9fa99fe51f35?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2110&amp;q=80" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-1 span-rows-2 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1561969451-a51b1034d762?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-3 span-rows-2 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1561983857-0a48c57dc564?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2094&amp;q=80" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-1 span-rows-2 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1561941465-ca2563b15c08?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1867&amp;q=80" data-srcset="" alt="An image">
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Masonry Grid End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-1" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-1" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div id="grid-example" class="col w-full p-0 grid preload grid-cols-3 grid-md-cols-2 grid-xs-cols-1" data-set-grid-item-height data-grid-ratio="1.5">
	<div class="grid-item grid-sizer bg-grey-ultralight">
		<div class="grid-item-inner">
			<div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
				<a class="overlay-link" href="#">
					<img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1558369178-6556d97855d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" data-srcset="" alt="An image">
					<span class="rollover-content items-center center">
						<span>
							Image Title
						</span>
					</span>
				</a>
			</div>
		</div>
	</div>
	<div class="grid-item span-cols-2 span-rows-2 bg-grey-ultralight">
		<div class="grid-item-inner">
			<div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
				<a class="overlay-link" href="#">
					<img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1552640195-a7c44126dc5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" data-srcset="" alt="An image">
					<span class="rollover-content items-center center">
						<span>
							Image Title
						</span>
					</span>
				</a>
			</div>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- CSS Masonry Grid Bg Images -->
      <div class="row mt-80 mx-0">
        <h3 class="font-light">As Background Images</h3>
        <div id="grid-example-bg-imgs" class="col w-full p-0 grid preload grid-cols-3 grid-md-cols-2 grid-sm-cols-1" data-set-grid-item-height="" data-as-bg-imgs="" data-grid-ratio="1.5">
          <div class="grid-item grid-sizer category-1 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1558369178-6556d97855d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item span-cols-2 span-rows-2 category-1 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1552640195-a7c44126dc5f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-2 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1552688468-d87e6f7a58f2?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item span-rows-2 category-3 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1552644217-0a96ef16a2a5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-2 category-3 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1552638293-ba420e6fbf12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-1 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1552608621-811cde5dcb4c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-3 span-rows-2 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1552637704-7a23c20ab149?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-1 span-rows-2 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1552598810-e76dd2eb05e1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-2 category-4 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1552613545-385e15ea6af6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item span-cols-2 span-rows-3 category-1 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1562051991-61fc474d64a3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=944&amp;q=80" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-2 category-4 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1558709995-98a2f442ecca?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-2 category-4 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1562004736-6704d0518d24?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-2 category-4 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1561982956-9fa99fe51f35?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2110&amp;q=80" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-1 span-rows-2 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1561969451-a51b1034d762?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-3 span-rows-2 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1561983857-0a48c57dc564?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2094&amp;q=80" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item category-1 span-rows-2 bg-grey-ultralight">
            <div class="grid-item-inner">
              <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                <a class="overlay-link" href="#">
                  <span class="img" data-src="https://images.unsplash.com/photo-1561941465-ca2563b15c08?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1867&amp;q=80" alt="An image"></span>
                  <span class="rollover-content items-center center">
                    <span> Image Title </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- CSS Masonry Grid Bg Images End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-2" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-2" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div id="grid-example-bg-imgs" class="col w-full p-0 grid preload grid-cols-3 grid-md-cols-2 grid-xs-cols-1" data-set-grid-item-height data-as-bg-imgs data-grid-ratio="1.5">
	<div class="grid-item grid-sizer bg-grey-ultralight">
		<div class="grid-item-inner">
			<div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
				<a class="overlay-link" href="#">
					<span class="img" data-src="https://images.unsplash.com/photo-1558369178-6556d97855d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"></span>
					<span class="rollover-content items-center center">
						<span>
							Image Title
						</span>
					</span>
				</a>
			</div>
		</div>
	</div>
	<div class="grid-item span-cols-2 span-rows-2 bg-grey-ultralight">
		<div class="grid-item-inner">
			<div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
				<a class="overlay-link" href="#">
					<span class="img" data-src="https://images.unsplash.com/photo-1552640195-a7c44126dc5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="An image"></span>
					<span class="rollover-content items-center center">
						<span>
							Image Title
						</span>
					</span>
				</a>
			</div>
		</div>
	</div>
</div>
--></code></pre>
        </pre>
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