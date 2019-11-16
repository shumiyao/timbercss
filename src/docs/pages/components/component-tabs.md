---
title: Component - Tabs
menu_label: Component - Tabs
layout: documentation
category: Components
markup_language: html
relative_path: components/component-tabs
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Tabs</h1>
      <div class="tabs rounded">
        <div class="tab-nav button-nav left">
          <a href="#tabs-1-pane-1" class="button border-b border-2 active bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Requirements</a>
          <a href="#tabs-1-pane-2" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">API</a>
          <a href="#tabs-1-pane-3" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">CallBacks</a>
          <a href="#tabs-1-pane-4" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Classes</a>
        </div>
        <div class="tab-panes px-0 rounded rounded-sm-b border-transparent">
          <div id="tabs-1-pane-1" class="active animate-in">
            <div class="tab-content">
              <p class="mb-0">The tabs component requires <code class="color-indigo font-bold">_tm.tabs.js</code>. Tabs are by default imported in <code class="color-indigo font-bold">_tm.core.js</code>, which means creating an instance of the core creates an instance of the tabs component. To exclude tabss, open<code class="color-indigo font-bold">_tm.core.js</code> and comment <code class="color-indigo font-bold">import tmTabs from './components/_tm.tabs.js';</code>.</p>
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
                      <th class="color-indigo">triggerLinkClick(#linkID)</th>
                      <td> Triggers tab button click. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">refresh()</th>
                      <td> Refreshes the plugin. Useful when new panes have been added to the tab. </td>
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let tabs = new tmTabs('.tabs');
tabs.method();
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.tabs.method();
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
                      <th class="color-indigo">paneVisible: function(){}</th>
                      <td> Called once a tab pane has been expanded. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">paneHidden: function(){}</th>
                      <td> Called once a tab pane has been collapsed. </td>
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let tabs = new tmTabs('.tabs',{
    callback:function(){}
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.tabs.settings.callback = function(){};
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
                      <th> Classes </th>
                      <th> Description </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">.tabs</th>
                      <td> Class for which the tabs instance is created. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">.active</th>
                      <td> Class added to active tab buttons. Can be added manually to tab buttons to activate tab panes on page load. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">.vertical</th>
                      <td> Class added to tab wrapper to make tab buttons align vertically. </td>
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
        <h3 class="font-light">Default</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="tabs rounded">
            <div class="tab-nav button-nav center">
              <a href="#tabs-1-pane-1" class="button size-md rounded-tl rounded-sm-t bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest active bg-active-primary color-active-white">Button</a>
              <a href="#tabs-1-pane-2" class="button size-md bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white">Button</a>
              <a href="#tabs-1-pane-3" class="button tab-link size-md rounded-tr rounded-sm-none bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white">Button</a>
            </div>
            <div class="tab-panes rounded rounded-sm-b bg-white">
              <div id="tabs-1-pane-1" class="active animate-in">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
              </div>
              <div id="tabs-1-pane-2">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                </div>
              </div>
              <div id="tabs-1-pane-3">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
<div class="tabs rounded">
	<div class="tab-nav button-nav center">
		<a href="#tabs-1-pane-1" class="button size-md rounded-tl rounded-sm-t bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest active bg-active-primary color-active-white">Button</a>
		<a href="#tabs-1-pane-2" class="button size-md bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white">Button</a>
		<a href="#tabs-1-pane-3" class="button tab-link size-md rounded-tr rounded-sm-none bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white">Button</a>
	</div>
	<div class="tab-panes rounded rounded-sm-b bg-white">
		<div id="tabs-1-pane-1" class="active animate-in">
			<div class="tab-content">
				<p>Content pane 1</p>
			</div>
		</div>
		<div id="tabs-1-pane-2">
			<div class="tab-content">
				<p>Content pane 2</p>
			</div>
		</div>
		<div id="tabs-1-pane-3">
			<div class="tab-content">
				<p>Content pane 3</p>
			</div>
		</div>
	</div>
</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Vertical</h3>
        <p>Use modifier class <code class="color-indigo font-bold">.vertical</code> to make any tabs vertical. Use Timber's row and column width utility classes to regulate tab button and tab pane widths.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="tabs vertical row rounded">
            <div class="tab-nav button-nav col w-3/12 w-lg-full center">
              <a href="#tabs-2-pane-1" class="button size-md rounded-tl rounded-sm-t bg-grey-ultralight bg-hover-grey-ultralight color-grey-dark color-hover-grey-darkest active bg-active-indigo color-active-white">Button</a>
              <a href="#tabs-2-pane-2" class="button size-md bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-purple color-active-white">Button</a>
              <a href="#tabs-2-pane-3" class="button size-md rounded-bl rounded-sm-none bg-grey-ultralight bg-hover-grey-ultralight color-grey-dark color-hover-grey-darkest bg-active-pink color-active-white">Button</a>
            </div>
            <div class="tab-panes col w-9/12 w-lg-full rounded-tr rounded-br rounded-bl rounded-lg-b bg-white">
              <div id="tabs-2-pane-1" class="active animate-in">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
              </div>
              <div id="tabs-2-pane-2">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                </div>
              </div>
              <div id="tabs-2-pane-3">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="tabs vertical row rounded">
		<div class="tab-nav button-nav col w-3/12 w-lg-full center">
			<a href="#tabs-2-pane-1" class="button size-md rounded-tl rounded-sm-t bg-grey-ultralight bg-hover-grey-ultralight color-grey-dark color-hover-grey-darkest active bg-active-indigo color-active-white">Button</a>
			<a href="#tabs-2-pane-2" class="button size-md bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-purple color-active-white">Button</a>
			<a href="#tabs-2-pane-3" class="button size-md rounded-bl rounded-sm-none bg-grey-ultralight bg-hover-grey-ultralight color-grey-dark color-hover-grey-darkest bg-active-pink color-active-white">Button</a>
		</div>
		<div class="tab-panes col w-9/12 w-lg-full rounded-tr rounded-br rounded-bl rounded-lg-b bg-white">
			<div id="tabs-2-pane-1" class="active animate-in">
				<div class="tab-content">
					<p>Content pane 1</p>
				</div>
			</div>
			<div id="tabs-2-pane-2">
				<div class="tab-content">
					<p>Content pane 2</p>
				</div>
			</div>
			<div id="tabs-2-pane-3">
				<div class="tab-content">
					<p>Content pane 3</p>
				</div>
			</div>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Customized With Utitliy Classes</h3>
        <div class="p-30 rounded border-1 border-grey-ultralight">
          <div class="tabs rounded">
            <div class="tab-nav button-nav">
              <a href="#tabs-4-pane-1" class="button pl-0 pr-40 text-normal bg-transparent bg-hover-transparent border-2 border-b border-lg border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest active border-active-teal color-active-teal"><span class="icon-material left">dashboard</span> Dashboard</a>
              <a href="#tabs-4-pane-2" class="button pl-0 pr-40 text-normal bg-transparent bg-hover-transparent border-2 border-b border-lg border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-teal color-active-teal"><span class="icon-material left">person</span> User</a>
              <a href="#tabs-4-pane-3" class="button pl-0 pr-40 text-normal bg-transparent bg-hover-transparent border-2 border-b border-lg border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-teal color-active-teal"><span class="icon-material left">settings</span> Settings</a>
            </div>
            <div class="tab-panes border-none pl-0 pr-0">
              <div id="tabs-4-pane-1" class="active animate-in">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
              </div>
              <div id="tabs-4-pane-2">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                </div>
              </div>
              <div id="tabs-4-pane-3">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="tabs rounded">
	<div class="tab-nav button-nav">
		<a href="#tabs-4-pane-1" class="button pl-0 pr-40 text-normal bg-transparent bg-hover-transparent border-2 border-b border-lg border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest active border-active-teal color-active-teal"><span class="icon-material left">dashboard</span> Dashboard</a>
		<a href="#tabs-4-pane-2" class="button pl-0 pr-40 text-normal bg-transparent bg-hover-transparent border-2 border-b border-lg border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-teal color-active-teal"><span class="icon-material left">person</span> User</a>
		<a href="#tabs-4-pane-3" class="button pl-0 pr-40 text-normal bg-transparent bg-hover-transparent border-2 border-b border-lg border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-teal color-active-teal"><span class="icon-material left">settings</span> Settings</a>
	</div>
	<div class="tab-panes border-none pl-0 pr-0">
		<div id="tabs-4-pane-1" class="active animate-in">
			<div class="tab-content">
				<p>Content pane 1</p>
			</div>
		</div>
		<div id="tabs-4-pane-2">
			<div class="tab-content">
				<p>Content pane 2</p>
			</div>
		</div>
		<div id="tabs-4-pane-3">
			<div class="tab-content">
				<p>Content pane 3</p>
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