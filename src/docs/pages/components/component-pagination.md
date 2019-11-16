---
title: Component - Pagination
menu_label: Component - Pagination
layout: documentation
category: Components
markup_language: html
relative_path: components/component-pagination
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Pagination</h1>
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Basic</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-full pagination justify-center">
              <a href="#" title="Previous Page" class="pagination-link button"><span class="icon-material">chevron_left</span></a>
              <span class="page-links hidden-sm">
                <a href="#" title="Page X" class="pagination-link button active"><span>1</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>2</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>3</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>4</span></a>
                <a href="#" title="More Pages" class="pagination-link button"><span>...</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>12</span></a>
              </span>
              <a href="#" title="Next Page" class="pagination-link button"><span class="icon-material">chevron_right</span></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row pt-0">
	<div class="col w-full pagination justify-center">
		<a href="#" title="Previous Page" class="pagination-link button"><span class="icon-material">chevron_left</span></a>
		<span class="page-links hidden-sm">
			<a href="#" title="Page X" class="pagination-link button active"><span>1</a>
			<a href="#" title="Page X" class="pagination-link button"><span>2</a>
			<a href="#" title="Page X" class="pagination-link button"><span>3</a>
			<a href="#" title="Page X" class="pagination-link button"><span>4</a>
			<a href="#" title="More Pages" class="pagination-link button"><span>...</a>
			<a href="#" title="Page X" class="pagination-link button"><span>12</a>
		</span>
		<a href="#" title="Next Page" class="pagination-link button"><span class="icon-material">chevron_right</span></a>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">With Labels</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-full pagination justify-between justify-sm-center">
              <a href="#" title="Previous Page" class="pagination-link button with-label"><span class="icon-material">chevron_left</span><span>Prev</span></a>
              <span class="page-links hidden-sm">
                <a href="#" title="Page X" class="pagination-link button active"><span>1</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>2</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>3</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>4</span></a>
                <a href="#" title="More Pages" class="pagination-link button"><span>...</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>12</span></a>
              </span>
              <a href="#" title="Next Page" class="pagination-link button with-label"><span>Next</span><span class="icon-material">chevron_right</span></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row pt-0">
	<div class="col w-full pagination justify-between justify-sm-center">
		<a href="#" title="Previous Page" class="pagination-link button with-label"><span class="icon-material">chevron_left</span><span>Prev</span></a>
		<span class="page-links hidden-sm">
			<a href="#" title="Page X" class="pagination-link button active"><span>1</a>
			<a href="#" title="Page X" class="pagination-link button"><span>2</a>
			<a href="#" title="Page X" class="pagination-link button"><span>3</a>
			<a href="#" title="Page X" class="pagination-link button"><span>4</a>
			<a href="#" title="More Pages" class="pagination-link button"><span>...</a>
			<a href="#" title="Page X" class="pagination-link button"><span>12</a>
		</span>
		<a href="#" title="Next Page" class="pagination-link button with-label"><span>Next</span><span class="icon-material">chevron_right</span></a>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Customised With Utitlity Classes</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-full pagination justify-center">
              <a href="#" title="Previous Page" class="pagination-link button m-0 rounded-l bg-grey-lightest color-grey bg-hover-green color-hover-white"><span class="icon-material">chevron_left</span></a>
              <span class="page-links">
                <a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white bg-active-indigo color-active-white active"><span>1</span></a>
                <a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>2</span></a>
                <a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>3</span></a>
                <a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>4</span></a>
                <a href="#" title="More Pages" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>...</span></a>
                <a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>12</span></a>
              </span>
              <a href="#" title="Next Page" class="pagination-link button m-0 rounded-r bg-grey-lightest color-grey bg-hover-green color-hover-white"><span class="icon-material">chevron_right</span></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row pt-0">
	<div class="col w-full pagination justify-center">
		<a href="#" title="Previous Page" class="pagination-link button m-0 rounded-l bg-grey-lightest color-grey bg-hover-green color-hover-white"><span class="icon-material">chevron_left</span></a>
		<span class="page-links">
			<a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white bg-active-indigo color-active-white active"><span>1</a>
			<a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>2</a>
			<a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>3</a>
			<a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>4</a>
			<a href="#" title="More Pages" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>...</a>
			<a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>12</a>
		</span>
		<a href="#" title="Next Page" class="pagination-link button m-0 rounded-r bg-grey-lightest color-grey bg-hover-green color-hover-white"><span class="icon-material">chevron_right</span></a>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row">
            <div class="col w-full pagination py-40">
              <div class="row pt-0">
                <div class="col w-6/12">
                  <a href="#" title="Previous Page" class="pagination-link button border-none flex flex-sm-row-reverse justify-start justify-sm-between w-auto m-0 left bg-transparent bg-hover-transparent color-grey color-hover-grey-darkest">
                    <span class="icon-material">chevron_left</span>
                    <span class="mt-0 ml-20 ml-sm-0">
                      <span class="leading-none text-tiny uppercase">Previous</span>
                      <span class="w-200 block text-large truncate">Discover the history of Paris</span>
                    </span>
                  </a>
                </div>
                <div class="col w-full hidden block-sm">
                  <hr>
                </div>
                <div class="col w-6/12">
                  <a href="#" title="Next Page" class="pagination-link button border-none flex flex-row-reverse justify-start justify-sm-between w-auto m-0 right bg-transparent bg-hover-transparent left-sm color-grey color-hover-grey-darkest">
                    <span class="icon-material mr-0 ml-10">chevron_right</span>
                    <span class="mt-0 mr-20">
                      <span class="leading-none text-tiny uppercase">Next</span>
                      <span class="w-200 block text-large truncate">What to do in stormy weather</span>
                    </span>
                  </a>
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
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row">
	<div class="col w-full pagination py-40">
		<div class="row pt-0">
			<div class="col w-6/12">
				<a href="#" title="Previous Page" class="pagination-link button border-none flex flex-sm-row-reverse justify-start justify-sm-between w-auto m-0 left bg-transparent bg-hover-transparent color-grey color-hover-grey-darkest">
					<span class="icon-material">chevron_left</span>
					<span class="mt-0 ml-20 ml-sm-0">
						<span class="leading-none text-tiny uppercase">Previous</span>
						<span class="w-200 block text-large truncate">Discover the history of Paris</span>
					</span>
				</a>
			</div>
			<div class="col w-full hidden block-sm">
				<hr>
			</div>
			<div class="col w-6/12">
				<a href="#" title="Next Page" class="pagination-link button border-none flex flex-row-reverse justify-start justify-sm-between w-auto m-0 right bg-transparent bg-hover-transparent left-sm color-grey color-hover-grey-darkest">
					<span class="icon-material mr-0 ml-10">chevron_right</span>
					<span class="mt-0 mr-20">
						<span class="leading-none text-tiny uppercase">Next</span>
						<span class="w-200 block text-large truncate">What to do in stormy weather</span>
					</span>
				</a>
			</div>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <div class="bg-grey-ultralight">
          <div class="row">
            <div class="col w-full pagination">
              <div class="row fluid collapse">
                <div class="col w-5/12">
                  <a href="#" title="Previous Page" class="pagination-link button rounded-none py-60 px-60 flex flex-sm-row-reverse justify-end justify-sm-between w-auto m-0 right left-sm bg-grey-ultralight bg-hover-grey-darkest color-grey-darker color-hover-white">
                    <span class="icon-material">chevron_left</span>
                    <span class="mt-0 ml-20 ml-sm-0">
                      <span class="block text-small font-bold">Discover the history of Paris</span>
                      <span class="opacity-60">Previous</span>
                    </span>
                  </a>
                </div>
                <div class="col w-2/12">
                  <a href="#" title="Return Home" class="pagination-link button rounded-none py-60 px-60 flex w-full m-0 justify-sm-start bg-grey-lightest bg-hover-grey-darkest color-grey-darker color-hover-white">
                    <span class="h3">
                      <span class="block text-small font-bold">Return</span>
                      <span class="opacity-60">Home</span>
                    </span>
                  </a>
                </div>
                <div class="col w-5/12">
                  <a href="#" title="Next Page" class="pagination-link button rounded-none py-60 px-60 flex flex-row-reverse justify-end justify-sm-between w-auto m-0 left bg-grey-ultralight bg-hover-grey-darkest color-grey-darker color-hover-white">
                    <span class="icon-material mr-0 ml-10">chevron_right</span>
                    <span class="mt-0 mr-20">
                      <span class="block text-small font-bold">Stormy weather practices</span>
                      <span class="opacity-60">Next</span>
                    </span>
                  </a>
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
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row">
	<div class="col w-full pagination">
		<div class="row fluid collapse">
			<div class="col w-5/12">
				<a href="#" title="Previous Page" class="pagination-link button rounded-none py-60 px-60 flex flex-sm-row-reverse justify-end justify-sm-between w-auto m-0 right left-sm bg-grey-ultralight bg-hover-indigo color-grey color-hover-white">
					<span class="icon-material">chevron_left</span>
					<span class="text-large mt-0 ml-20">
						<small>Discover the history of Paris</small>
						<span>Previous</span>
					</span>
				</a>
			</div>
			<div class="col w-2/12">
				<a href="#" title="Return Home" class="pagination-link button rounded-none py-60 px-60 flex w-full m-0 justify-sm-start bg-grey-lightest bg-hover-indigo color-grey color-hover-white">
					<span class="h3">
						<small>Return</small>
						Home
					</span>
				</a>
			</div>
			<div class="col w-5/12">
				<a href="#" title="Next Page" class="pagination-link button rounded-none py-60 px-60 flex flex-row-reverse justify-end justify-sm-between w-auto m-0 left bg-grey-ultralight bg-hover-indigo color-grey color-hover-white">
					<span class="icon-material mr-0 ml-10">chevron_right</span>
					<span class="text-large mt-0 mr-20">
						<small>What to do in stormy weather</small>
						<span>Next</span>
					</span>
				</a>
			</div>
		</div>
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