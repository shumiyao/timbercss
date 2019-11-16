---
title: Partial - Logo Grid
menu_label: Partial - Logo Grid
layout: documentation
category: Blocks
markup_language: html
relative_path: blocks/block-register
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Block: Logo Grid</h1>
      <p class="mb-10">Below are two sample login form examples that are customised Timber's utility classes and plugins.</p>
      <h3 class="font-light mt-80">Simple</h3>
      <!-- Register Section -->
      <div class="section-block bg-grey-ultralight">
        <div class="row">
          <div class="col w-8/12 offset-2">
            <div class="register-form-container card rounded size-xl bg-white border-grey-ultralight shadow-x3">
              <div class="row">
                <div class="col w-full px-0">
                  <h3>Register</h3>
                  <p class="mb-20">Already have an account? <a href="#" class="fade-location">Click Here</a></p>
                  <hr>
                </div>
              </div>
              <form class="register-form" action="#" method="post" novalidate="">
                <div class="row row-form">
                  <div class="col w-6/12">
                    <label>First Name:</label>
                    <input type="text" name="user_firstname" class="form-firstname form-element rounded size-md" placeholder="John" required="">
                  </div>
                  <div class="col w-6/12">
                    <label>Last Name:</label>
                    <input type="text" name="user_lastname" class="form-lastname form-element rounded size-md" placeholder="Doe" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full px-0">
                    <label>Email:</label>
                    <input type="email" name="user_email" class="form-email form-element rounded size-md" placeholder="johndoe@gmail.com" required="">
                  </div>
                </div>
                <div class="row row-form">
                  <div class="col w-6/12">
                    <label>Password:</label>
                    <input type="password" name="user_password" class="form-password form-element rounded size-md" placeholder="••••••••" required="">
                  </div>
                  <div class="col w-6/12">
                    <label>Repeat Password:</label>
                    <input type="password" name="user_password_repeat" class="form-password form-element rounded size-md" placeholder="••••••••" required="">
                  </div>
                </div>
                <div class="row row-form">
                  <div class="col w-full mt-10">
                    <input type="submit" value="Create Account" class="form-submit button rounded size-md mb-0">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Register Section End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-1" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-1" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="register-form-container card rounded size-xl bg-white border-grey-ultralight shadow-x3">
	<div class="row">
		<div class="col w-full px-0">
			<h3>Register</h3>
			<p class="mb-20">Already have an account? <a href="#" class="fade-location">Click Here</a></p>
			<hr>
		</div>
	</div>
	<form class="register-form" action="#" method="post" novalidate>
		<div class="row row-form">
			<div class="col w-6/12">
				<label>First Name:</label>
				<input type="text" name="user_firstname" class="form-firstname form-element rounded size-md" placeholder="John" required>
			</div>
			<div class="col w-6/12">
				<label>Last Name:</label>
				<input type="text" name="user_lastname" class="form-lastname form-element rounded size-md" placeholder="Doe" required>
			</div>
		</div>
		<div class="row">
			<div class="col w-full px-0">
				<label>Email:</label>
				<input type="email" name="user_email" class="form-email form-element rounded size-md" placeholder="johndoe@gmail.com" required>
			</div>
		</div>
		<div class="row row-form">
			<div class="col w-6/12">
				<label>Password:</label>
				<input type="password" name="user_password" class="form-password form-element rounded size-md" placeholder="••••••••" required>
			</div>
			<div class="col w-6/12">
				<label>Repeat Password:</label>
				<input type="password" name="user_password_repeat" class="form-password form-element rounded size-md" placeholder="••••••••" required>
			</div>
		</div>
		<div class="row row-form">
			<div class="col w-full mt-10">
				<input type="submit" value="Create Account" class="form-submit button rounded size-md mb-0">
			</div>
		</div>
	</form>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <h3 class="font-light mt-80">Advanced</h3>
      <!-- Register Section -->
      <div class="section-block bg-grey-ultralight">
        <div class="row">
          <div class="col w-6/12 w-md-full offset-1 offset-md-0">
            <div class="register-form-container card rounded size-xl bg-white border-grey-ultralight shadow-x3">
              <div class="row">
                <div class="col w-full">
                  <h3>Register</h3>
                  <p class="mb-20">Already have an account? <a href="#" class="fade-location">Click Here</a></p>
                  <hr>
                </div>
              </div>
              <form class="register-form" action="#" method="post" novalidate="">
                <div class="row">
                  <div class="col w-full px-0">
                    <label>Company Name:</label>
                    <input type="text" name="user_company" class="form-companyname form-element rounded size-md" placeholder="John" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full px-0">
                    <label>Email:</label>
                    <input type="email" name="user_email" class="form-email form-element rounded size-md" placeholder="johndoe@gmail.com" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full px-0">
                    <label>Country:</label>
                    <div class="form-select size-md">
                      <select name="user_country" class="form-element rounded" required="">
                        <option selected="selected" value="">Country</option>
                        <option value="">Andorra</option>
                        <option value="">France</option>
                        <option value="">Germany</option>
                        <option value="">Norway</option>
                        <option value="">Sweden</option>
                        <option value="">United Kingdom</option>
                        <option value="">United States</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full px-0 mt-10">
                    <input type="submit" value="Next Step" class="form-submit button rounded size-md w-full mb-0">
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col w-4/12 hide-md">
            <ul class="progressline sticky pst-30 left">
              <li class="progressline-item active">
                <div class="progressline-content pb-20">
                  <span>Enter Personal Details</span>
                </div>
              </li>
              <li class="progressline-item disabled">
                <div class="progressline-content pb-20">
                  <span>Create An Account</span>
                </div>
              </li>
              <li class="progressline-item disabled">
                <div class="progressline-content pb-20">
                  <span>Vertify Email</span>
                </div>
              </li>
              <li class="progressline-item disabled">
                <div class="progressline-content pb-20">
                  <span>Enter Payment info</span>
                </div>
              </li>
              <li class="progressline-item disabled">
                <div class="progressline-content pb-20">
                  <span>Accept Terms</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Register Section End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-2" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-2" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row">
	<div class="col w-6/12 w-md-full offset-1 offset-md-0">
		<div class="register-form-container card rounded size-xl bg-white border-grey-ultralight shadow-x3">
			<div class="row">
				<div class="col w-full">
					<h3>Register</h3>
					<p class="mb-20">Already have an account? <a href="#" class="fade-location">Click Here</a></p>
					<hr>
				</div>
			</div>
			<form class="register-form" action="#" method="post" novalidate>
				<div class="row">
					<div class="col w-full px-0">
						<label>Company Name:</label>
						<input type="text" name="user_company" class="form-companyname form-element rounded size-md" placeholder="John" required>
					</div>
				</div>
				<div class="row">
					<div class="col w-full px-0">
						<label>Email:</label>
						<input type="email" name="user_email" class="form-email form-element rounded size-md" placeholder="johndoe@gmail.com" required>
					</div>
				</div>
				<div class="row">
					<div class="col w-full px-0">
						<label>Country:</label>
						<div class="form-select size-md">
							<select name="user_country" class="form-element rounded" required>
								<option selected="selected" value="">Country</option>
								<option value="">Andorra</option>
								<option value="">France</option>
								<option value="">Germany</option>
								<option value="">Norway</option>
								<option value="">Sweden</option>
								<option value="">United Kingdom</option>
								<option value="">United States</option>
							</select>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col w-full px-0 mt-10">
						<input type="submit" value="Next Step" class="form-submit button rounded size-md w-full mb-0">
					</div>
				</div>
			</form>
		</div>
	</div>
	<div class="col w-4/12 hide-md">
		<ul class="progressline sticky pst-30 left">
			<li class="progressline-item active">
				<div class="progressline-content pb-20">
					<span>Enter Personal Details</span>
				</div>
			</li>
			<li class="progressline-item disabled">
				<div class="progressline-content pb-20">
					<span>Create An Account</span>
				</div>
			</li>
			<li class="progressline-item disabled">
				<div class="progressline-content pb-20">
					<span>Vertify Email</span>
				</div>
			</li>
			<li class="progressline-item disabled">
				<div class="progressline-content pb-20">
					<span>Enter Payment info</span>
				</div>
			</li>
			<li class="progressline-item disabled">
				<div class="progressline-content pb-20">
					<span>Accept Terms</span>
				</div>
			</li>
		</ul>
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