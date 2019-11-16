---
title: Component - Form
menu_label: Component - Form
layout: documentation
category: Components
markup_language: html
relative_path: components/component-form
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Form</h1>
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Input</h3>
        <input type="test" placeholder="Placeholder text" class="form-element rounded">
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<input type="test" placeholder="Placeholder text" class="form-element rounded">
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Input Group</h3>
        <div class="row">
          <div class="col w-4/12">
            <div class="input-group">
              <input type="text" name="user_name" placeholder="Name" class="form-element size-md rounded-l">
              <div class="form-element input-icon size-md rounded-r"><span class="icon-material">person</span></div>
            </div>
          </div>
          <div class="col w-4/12">
            <div class="input-group">
              <input type="text" name="user_password" placeholder="Password" class="form-element size-md rounded-l">
              <div class="form-element input-icon size-md rounded-r"><span class="icon-material">lock</span></div>
            </div>
          </div>
          <div class="col w-4/12">
            <div class="input-group">
              <input type="email" name="user_email" placeholder="name@yourdomain.com" class="form-element size-md rounded-l">
              <div class="form-element input-icon size-md rounded-r"><span class="icon-material">email</span></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="input-group">
	<input type="text" name="user_name" placeholder="Name" class="form-element size-md rounded-l">
	<div class="form-element input-icon size-md rounded-r"><span class="icon-material">person</span></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Input Group Reversed</h3>
        <div class="row">
          <div class="col w-4/12">
            <div class="input-group reverse">
              <input type="text" name="user_name" placeholder="Name" class="form-element size-md rounded-r">
              <div class="form-element input-icon size-md rounded-l"><span class="icon-material">person</span></div>
            </div>
          </div>
          <div class="col w-4/12">
            <div class="input-group reverse">
              <input type="text" name="user_password" placeholder="Password" class="form-element size-md rounded-r">
              <div class="form-element input-icon size-md rounded-l"><span class="icon-material">lock</span></div>
            </div>
          </div>
          <div class="col w-4/12">
            <div class="input-group reverse">
              <input type="email" name="user_email" placeholder="name@yourdomain.com" class="form-element size-md rounded-r">
              <div class="form-element input-icon size-md rounded-l"><span class="icon-material">email</span></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="input-group reverse">
	<input type="text" name="user_name" placeholder="Name" class="form-element size-md rounded-r">
	<div class="form-element input-icon size-md rounded-l"><span class="icon-material">person</span></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Select</h3>
        <div class="form-select size-md">
          <select name="budget" class="form-element rounded" data-label="Project Budget">
            <option selected="selected" value="Project Budget">Project Budget</option>
            <option value="">$500-$1000</option>
            <option value="">$1000-$2000</option>
            <option value="">$2000-$3500</option>
            <option value="">$5000+</option>
          </select>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="form-select size-md">
	<select name="budget" class="form-element rounded" data-label="Project Budget">
		<option selected="selected" value="Project Budget">Project Budget</option>
		<option value="">$500-$1000</option>
		<option value="">$1000-$2000</option>
		<option value="">$2000-$3500</option>
		<option value="">$5000+</option>
	</select>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Select Group</h3>
        <div class="row">
          <div class="col w-4/12">
            <div class="input-group reverse">
              <div class="form-select size-md">
                <select name="budget" class="form-element rounded-r" data-label="Project Budget">
                  <option selected="selected" value="Project Budget">Project Budget</option>
                  <option value="">$500-$1000</option>
                  <option value="">$1000-$2000</option>
                  <option value="">$2000-$3500</option>
                  <option value="">$5000+</option>
                </select>
              </div>
              <div class="form-element input-icon size-md rounded-l"><span class="icon-material">sort</span></div>
            </div>
          </div>
          <div class="col w-4/12">
            <div class="input-group">
              <div class="form-select size-md">
                <select name="budget" class="form-element rounded-l" data-label="Project Budget">
                  <option selected="selected" value="Project Budget">Project Budget</option>
                  <option value="">$500-$1000</option>
                  <option value="">$1000-$2000</option>
                  <option value="">$2000-$3500</option>
                  <option value="">$5000+</option>
                </select>
              </div>
              <div class="form-element input-icon size-md rounded-r"><span class="icon-material">flag</span></div>
            </div>
          </div>
          <div class="col w-4/12">
            <div class="input-group">
              <div class="form-select size-md">
                <select name="budget" class="form-element rounded-l" data-label="Project Budget" multiple="">
                  <option selected="selected" value="Project Budget">Project Budget</option>
                  <option value="">$500-$1000</option>
                  <option value="">$1000-$2000</option>
                  <option value="">$2000-$3500</option>
                  <option value="">$5000+</option>
                </select>
              </div>
              <div class="form-element input-icon size-md rounded-r"><span class="icon-material">flag</span></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="input-group reverse">
	<div class="form-select size-md">
		<select name="budget" class="form-element rounded-r" data-label="Project Budget">
			<option selected="selected" value="Project Budget">Project Budget</option>
			<option value="">$500-$1000</option>
			<option value="">$1000-$2000</option>
			<option value="">$2000-$3500</option>
			<option value="">$5000+</option>
		</select>
	</div>
	<div class="form-element input-icon size-md rounded-l"><span class="icon-material">sort</span></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Input Outline</h3>
        <input type="test" placeholder="With shadow outline" class="form-element rounded shadow-focus-outline">
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<input type="test" placeholder="With shadow outline" class="form-element rounded shadow-focus-outline">
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Ready Only</h3>
        <input type="test" placeholder="A ready only input" class="form-element rounded" readonly="">
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<input type="test" placeholder="A ready only input" class="form-element rounded" readonly>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Labels</h3>
        <div class="row">
          <div class="col w-full">
            <label for="user_email">E-mail</label>
            <input type="email" name="user_email" placeholder="name@yourdomain.com" class="form-element rounded">
          </div>
        </div>
        <div class="row input-group label">
          <label for="user_email" class="col w-2/12 w-md-3/12">Your Name</label>
          <div class="col w-10/12 w-md-9/12">
            <input type="text" name="user_name" placeholder="Your Name" class="form-element rounded">
          </div>
        </div>
        <div class="row input-group label">
          <label for="user_email" class="col w-2/12 w-md-3/12">Your E-mail</label>
          <div class="col w-10/12 w-md-9/12">
            <input type="email" name="user_email" placeholder="name@yourdomain.com" class="form-element rounded">
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<label for="user_email">E-mail</label>
<input type="email" name="user_email" placeholder="name@yourdomain.com" class="form-element rounded">
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Radio Buttons</h3>
        <input id="radio-1" class="form-element radio active" name="radio-group" type="radio" checked="">
        <label for="radio-1" class="radio-label form-radio">I need my website reworked</label>
        <input id="radio-2" class="form-element radio" name="radio-group" type="radio">
        <label for="radio-2" class="radio-label form-radio">I need a new website</label>
        <input id="radio-3" class="form-element radio" name="radio-group" type="radio">
        <label for="radio-3" class="radio-label form-radio">I need a new website</label>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<input id="radio-1" class="form-element radio active" name="radio-group" type="radio" checked>
<label for="radio-1" class="radio-label form-radio">I need my website reworked</label>
<input id="radio-2" class="form-element radio" name="radio-group" type="radio">
<label for="radio-2" class="radio-label form-radio">I need a new website</label>
<input id="radio-3" class="form-element radio" name="radio-group" type="radio">
<label for="radio-3" class="radio-label form-radio">I need a new website</label>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Checkboxes</h3>
        <input id="checkbox-1" class="form-element checkbox" name="checkbox-1" type="checkbox" required="">
        <label for="checkbox-1" class="checkbox-label">I agree to the terms</label>
        <input id="checkbox-2" class="form-element checkbox" name="checkbox-2" type="checkbox" required="">
        <label for="checkbox-2" class="checkbox-label">I love candy</label>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<input id="checkbox-1" class="form-element checkbox"name="checkbox-1" type="checkbox" required>
<label for="checkbox-1" class="checkbox-label">I agree to the terms</label>
<input id="checkbox-2" class="form-element checkbox" name="checkbox-2" type="checkbox" required>
<label for="checkbox-2" class="checkbox-label">I love candy</label>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Customized With Utility Classes</h3>
        <div class="row">
          <div class="col w-8/12 pr-0">
            <input type="test" placeholder="yourname@yourdomain.com" class="form-element pl-0 border-b border-2 text-large">
          </div>
          <div class="col w-4/12 pl-0">
            <input type="submit" value="Send" class="button m-0 bg-transparent bg-hover-transparent border-b border-2 border-grey-dark border-hover-primary color-grey-dark color-hover-primary text-large">
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row">
	<div class="col w-8/12 pr-0">
		<input type="test" placeholder="yourname@yourdomain.com" class="form-element pl-0 border-b border-2 text-large">
	</div>
	<div class="col w-4/12 pl-0">
		<input type="submit" value="Send" class="button m-0 bg-transparent bg-hover-transparent border-b border-2 border-grey-dark border-hover-primary color-grey-dark color-hover-primary text-large">
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