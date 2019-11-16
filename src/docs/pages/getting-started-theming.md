---
title: Theming
menu_label: Theming
layout: documentation
category: Getting Started
markup_language: html
relative_path: getting-started-theming
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Theming</h1>
      <p class="text-large">Timber uses Sass variables for generating utlity classes, for theming, component and block changes.</p>
      <h2 class="font-light text-huge">SCSS</h2>
      <p>Avoid modifying the core Timber Sass files so that updating the core will not overwrite your changes or customisations. Either create your own stylesheet and import Timber, or, use the <strong>_variables_custom.scss</strong> file for overwriting default framework Sass variables. Note that variable <strong>_variables_timber.scss</strong> has the !default flag, which allows you to override the variable’s default value in <strong>_variables_custom.scss</strong>t modifying Timber's source code. Copy and paste variables as needed, modify their values, and remove the !default flag.</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--your-project/
├── src
│   └── scss
│		└── mixins
│		└── partials
│		└── utilities
│		└── _timber.scss
│		└── _variables_timber.scss
│		└── _variables_custom.scss
--></code></pre>
      </div>
      <!-- code -->
      <h5>Removing utilities, components &amp; blocks</h5>
      <p>Most likely you will not need all utilities, components and blocks for every project. As such, remove the ones you do not need in <code class="color-indigo font-bold">_timber.scss</code> by simply commenting the ones not needed. Once you run the build command, these scss files will be exluded.</p>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-1" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-1" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--// Timber variables
@import '_variables_timber.scss';

// Variable overrides
@import '_variables_custom.scss';

@import 'mixins/_box-shadow.scss';
@import 'mixins/_breakpoints.scss';
@import 'mixins/_color-mod.scss';
@import 'mixins/_gradients.scss';
@import 'mixins/_replace-string.scss';
@import 'mixins/_colors.scss';
@import 'mixins/_transition.scss';
@import 'mixins/_uncode.scss';

@import 'partials/components/_base.scss';
@import 'partials/components/_grid-flexbox.scss';
@import 'partials/components/_grid-css.scss';
@import 'partials/components/_accordion.scss';
@import 'partials/components/_badge.scss';
//@import 'partials/components/_breadcrumb.scss';
@import 'partials/components/_button.scss';
@import 'partials/components/_card.scss';
@import 'partials/components/_code.scss';
@import 'partials/components/_collapsable.scss';
@import 'partials/components/_dropdown.scss';
@import 'partials/components/_forms.scss';
@import 'partials/components/_icon-library.scss';
@import 'partials/components/_icon.scss';
@import 'partials/components/_image.scss';
@import 'partials/components/_list.scss';
@import 'partials/components/_media.scss';
@import 'partials/components/_navigation.scss';
@import 'partials/components/_overlay-navigation.scss';
@import 'partials/components/_pagination.scss';
/*@import 'partials/components/_pricing-table.scss';
@import 'partials/components/_progress-bar.scss';
@import 'partials/components/_progressline.scss';
@import 'partials/components/_side-navigation.scss';*/
@import 'partials/components/_table.scss';
@import 'partials/components/_tabs.scss';

@import 'utilities/background/_background-attachment.scss';
@import 'utilities/background/_background-position.scss';
@import 'utilities/background/_background-repeat.scss';
@import 'utilities/background/_background-size.scss';
@import 'utilities/border/_border-radius.scss';
@import 'utilities/border/_border-style.scss';
@import 'utilities/border/_border-width.scss';
@import 'utilities/color/_background.scss';
@import 'utilities/color/_border.scss';
@import 'utilities/color/_color.scss';
@import 'utilities/effects/_opacity.scss';
@import 'utilities/effects/_shadow.scss';
@import 'utilities/effects/_transition.scss';
@import 'utilities/flexbox/_flex.scss';
@import 'utilities/interactivity/_cursor.scss';
@import 'utilities/interactivity/_pointer-events.scss';
@import 'utilities/interactivity/_resize.scss';
@import 'utilities/interactivity/_select.scss';
@import 'utilities/layout/_display.scss';
@import 'utilities/layout/_float.scss';
@import 'utilities/layout/_overflow.scss';
@import 'utilities/layout/_position.scss';
@import 'utilities/layout/_visibility.scss';
@import 'utilities/layout/_z-index.scss';
@import 'utilities/sizing/_height.scss';
@import 'utilities/sizing/_width.scss';
@import 'utilities/spacing/_padding.scss';
@import 'utilities/spacing/_margin.scss';
@import 'utilities/states/_disabled.scss';
@import 'utilities/typography/_font-family.scss';
@import 'utilities/typography/_font-size.scss';
@import 'utilities/typography/_font-style.scss';
@import 'utilities/typography/_font-weight.scss';
@import 'utilities/typography/_letter-spacing.scss';
@import 'utilities/typography/_line-height.scss';
@import 'utilities/typography/_text-align.scss';
@import 'utilities/typography/_text-decoration.scss';
@import 'utilities/typography/_text-transform.scss';
@import 'utilities/typography/_vertical-align.scss';
@import 'utilities/typography/_whitespace.scss';
@import 'utilities/typography/_word-break.scss';

@import 'partials/plugins/_horizon.scss';
@import 'partials/plugins/_preloader.scss';
@import 'partials/plugins/_parallax.scss';
@import 'partials/plugins/_summit.scss';

@import 'partials/sections/_base.scss';
@import 'partials/sections/_feature.scss';
@import 'partials/sections/_footer.scss';
@import 'partials/sections/_grid.scss';
@import 'partials/sections/_header.scss';
@import 'partials/sections/_hero.scss';
@import 'partials/sections/_logo.scss';
@import 'partials/sections/_masthead.scss';
@import 'partials/sections/_sidebar.scss';--></code></pre>
      </div>
      <!-- code -->
      <h5>Importing your own partials</h5>
      <p>To add your own SCSS to Timber, open <code class="color-indigo font-bold">timber.scss</code> and import your files as necessary.</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--@import 'folder/_your_file.scss';
--></code></pre>
      </div>
      <!-- code -->
      <hr class="mt-50">
      <a href="getting-started-file-size.html" title="Next Page" class="pagination-link button border-none flex flex-row-reverse justify-start justify-sm-between w-auto pr-0 m-0 right bg-transparent bg-hover-transparent left-sm color-grey color-hover-grey-darkest">
        <span class="icon-material mr-0 ml-10">chevron_right</span>
        <span class="mt-0 mr-20">
          <span class="leading-none text-tiny uppercase">Next</span>
          <span class="block text-large">Managing file size</span>
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