---
title: Component - Table
menu_label: Component - Table
layout: documentation
category: Components
markup_language: html
relative_path: components/component-table
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Table</h1>
      <p>Tables come with a few modifier classes that regulate size, appearance, and responsiveness.</p>
      <!-- Classes -->
      <div class="table-scrollable">
        <table class="table size-md rounded bg-white">
          <thead>
            <tr>
              <th> Class </th>
              <th> Value </th>
            </tr>
          </thead>
          <tbody class="font-mono">
            <tr>
              <th class="color-indigo">.size-sm</th>
              <td> Sets table padding to small. </td>
            </tr>
            <tr>
              <th class="color-indigo">.size-md</th>
              <td> Sets table padding to medium. </td>
            </tr>
            <tr>
              <th class="color-indigo">.size-lg</th>
              <td> Sets table padding to large. </td>
            </tr>
            <tr>
              <th class="color-indigo">.size-xl</th>
              <td> Sets table padding to extra large. </td>
            </tr>
            <tr>
              <th class="color-indigo">.striped</th>
              <td> Adds zebra-striping to any table row within the tbody. </td>
            </tr>
            <tr>
              <th class="color-indigo">.table-scrollable</th>
              <td> Used to make the table scrollable for smaller breakpoints. </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Size</h3>
        <p>Use table size classes to quickly change the padding sizes of an entire table. Or, use Timber's padding utility classes for more control.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="table-scrollable">
            <table class="table size-md rounded bg-white">
              <thead>
                <tr>
                  <th> # </th>
                  <th> First </th>
                  <th> Last </th>
                  <th> @Handle </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td> Adam </td>
                  <td> John </td>
                  <td> @linkedin </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td> John </td>
                  <td> Paul </td>
                  <td> @facebook </td>
                </tr>
                <tr>
                  <th> 3 </th>
                  <td> Henry </td>
                  <td> Peter </td>
                  <td> @dribbble </td>
                </tr>
                <tr>
                  <th> 4 </th>
                  <td> Josh </td>
                  <td> Richard </td>
                  <td> @twitter </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="table-scrollable">
	<table class="table size-md rounded bg-white">
		<thead>
			<tr>
				<th>
					#
				</th>
				<th>
					First
				</th>
				<th>
					Last
				</th>
				<th>
					@Handle
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>1</th>
				<td>
					Adam
				</td>
				<td>
					John
				</td>
				<td>
					@linkedin
				</td>
			</tr>
			<tr>
				<th>2</th>
				<td>
					John
				</td>
				<td>
					Paul
				</td>
				<td>
					@facebook
				</td>
			</tr>
			<tr>
				<th>
					3
				</th>
				<td>
					Henry
				</td>
				<td>
					Peter
				</td>
				<td>
					@dribbble
				</td>
			</tr>
			<tr>
				<th>
					4
				</th>
				<td>
					Josh
				</td>
				<td>
					Richard
				</td>
				<td>
					@twitter
				</td>
			</tr>
		</tbody>
	</table>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Striping</h3>
        <p>Use <code class="color-indigo font-bold">.striped</code> to add zebra striping to all table rows in the tbody.</p>
        <div class="p-30 rounded border-1 border-grey-ultralight">
          <div class="table-scrollable">
            <table class="table striped size-md rounded bg-white">
              <thead>
                <tr>
                  <th> # </th>
                  <th> First </th>
                  <th> Last </th>
                  <th> @Handle </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td> Adam </td>
                  <td> John </td>
                  <td> @linkedin </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td> John </td>
                  <td> Paul </td>
                  <td> @facebook </td>
                </tr>
                <tr>
                  <th> 3 </th>
                  <td> Henry </td>
                  <td> Peter </td>
                  <td> @dribbble </td>
                </tr>
                <tr>
                  <th> 4 </th>
                  <td> Josh </td>
                  <td> Richard </td>
                  <td> @twitter </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="table-scrollable">
	<table class="table striped size-md rounded bg-white">
		<thead>
			<tr>
				<th>
					#
				</th>
				<th>
					First
				</th>
				<th>
					Last
				</th>
				<th>
					@Handle
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>1</th>
				<td>
					Adam
				</td>
				<td>
					John
				</td>
				<td>
					@linkedin
				</td>
			</tr>
			<tr>
				<th>2</th>
				<td>
					John
				</td>
				<td>
					Paul
				</td>
				<td>
					@facebook
				</td>
			</tr>
			<tr>
				<th>
					3
				</th>
				<td>
					Henry
				</td>
				<td>
					Peter
				</td>
				<td>
					@dribbble
				</td>
			</tr>
			<tr>
				<th>
					4
				</th>
				<td>
					Josh
				</td>
				<td>
					Richard
				</td>
				<td>
					@twitter
				</td>
			</tr>
		</tbody>
	</table>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Scrollable</h3>
        <p>Use the <code class="color-indigo font-bold">.table-scrollable</code> to make the table scrollable when the container becomes smaller. This class should be added to the table's wrapping parent.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="table-scrollable">
            <table class="table striped size-md rounded bg-white">
              <thead>
                <tr>
                  <th> Features </th>
                  <th>
                    <span class="badge rounded h5 m-0 bg-green color-white">Free</span>
                  </th>
                  <th>
                    <span class="badge rounded h5 m-0 bg-blue color-white">Team Pro</span>
                  </th>
                  <th>
                    <span class="badge rounded h5 m-0 bg-pink color-white">Team Business</span>
                  </th>
                  <th>
                    <span class="badge rounded h5 m-0 bg-purple color-white">Enterprise</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Included Users</th>
                  <td> 1 </td>
                  <td> 5 </td>
                  <td> 10 </td>
                  <td> Custom </td>
                </tr>
                <tr>
                  <th>Extra Users</th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td> $9/user/month </td>
                  <td> $29/user/month </td>
                  <td> Custom Pricing </td>
                </tr>
                <tr>
                  <th> Collaborator role </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                </tr>
                <tr>
                  <th> Billing admin role </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                </tr>
                <tr>
                  <th> Invoicing </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                </tr>
                <tr>
                  <th> 99.99% Uptime SLA </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                </tr>
                <tr>
                  <th> 24x7 Premium Support </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                </tr>
                <tr>
                  <th> Role-based access control </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                </tr>
                <tr>
                  <th> Audit logs </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td> 7-day history </td>
                  <td> Full history </td>
                  <td> Full history </td>
                </tr>
                <tr>
                  <th> Bandwidth </th>
                  <td> 100GB </td>
                  <td> 400GB </td>
                  <td> 600GB </td>
                  <td> custom </td>
                </tr>
                <tr>
                  <th>Extra bandwidth</th>
                  <td> $20/100GB </td>
                  <td> $20/100GB </td>
                  <td> $20/100GB </td>
                  <td> custom </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <a href="#" class="button size-sm rounded mb-0">Select Option</a>
                  </td>
                  <td>
                    <a href="#" class="button size-sm rounded mb-0">Select Option</a>
                  </td>
                  <td>
                    <a href="#" class="button size-sm rounded mb-0">Select Option</a>
                  </td>
                  <td>
                    <a href="#" class="button size-sm rounded mb-0">Select Option</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="table-scrollable">
	<table class="table striped size-md rounded bg-white">
		<thead>
			<tr>
				<th>
					Features
				</th>
				<th>
					<span class="badge rounded h5 m-0 bg-green color-white">Free</span>
				</th>
				<th>
					<span class="badge rounded h5 m-0 bg-blue color-white">Team Pro</span>
				</th>
				<th>
					<span class="badge rounded h5 m-0 bg-pink color-white">Team Business</span>
				</th>
				<th>
					<span class="badge rounded h5 m-0 bg-purple color-white">Enterprise</span>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Included Users</th>
				<td>
					1
				</td>
				<td>
					5
				</td>
				<td>
					10
				</td>
				<td>
					Custom
				</td>
			</tr>
			<tr>
				<th>Extra Users</th>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					$9/user/month
				</td>
				<td>
					$29/user/month
				</td>
				<td>
					Custom Pricing
				</td>
			</tr>
			<tr>
				<th>
					Collaborator role
				</th>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0 color-green">done</span>
				</td>
				<td>
					<span class="icon-material mb-0 color-green">done</span>
				</td>
				<td>
					<span class="icon-material mb-0 color-green">done</span>
				</td>
			</tr>
			<tr>
				<th>
					Billing admin role
				</th>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0 color-green">done</span>
				</td>
				<td>
					<span class="icon-material mb-0 color-green">done</span>
				</td>
			</tr>
			<tr>
				<th>
					Invoicing
				</th>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0 color-green">done</span>
				</td>
			</tr>
			<tr>
				<th>
					99.99% Uptime SLA
				</th>
				<td>
	  				<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0 color-green">done</span>
				</td>
			</tr>
			<tr>
				<th>
					24x7 Premium Support
				</th>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0 color-green">done</span>
				</td>
			</tr>
			<tr>
				<th>
					Role-based access control
				</th>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					<span class="icon-material mb-0 color-green">done</span>
				</td>
				<td>
					<span class="icon-material mb-0 color-green">done</span>
				</td>
			</tr>
			<tr>
				<th>
					Audit logs
				</th>
				<td>
					<span class="icon-material mb-0">close</span>
				</td>
				<td>
					7-day history
				</td>
				<td>
					Full history
				</td>
				<td>
					Full history
				</td>
			</tr>
			<tr>
				<th>
					Bandwidth
				</th>
				<td>
					100GB
				</td>
				<td>
					400GB
				</td>
				<td>
					600GB
				</td>
				<td>
					custom
				</td>
			</tr>
			<tr>
				<th>Extra bandwidth</th>
				<td>
					$20/100GB

				</td>
				<td>
					$20/100GB

				</td>
				<td>
					$20/100GB

				</td>
				<td>
					custom
				</td>
			</tr>
			<tr>
				<th></th>
				<td>
					<a href="#" class="button size-sm rounded mb-0">Select Option</a>

				</td>
				<td>
					<a href="#" class="button size-sm rounded mb-0">Select Option</a>

				</td>
				<td>
					<a href="#" class="button size-sm rounded mb-0">Select Option</a>

				</td>
				<td>
					<a href="#" class="button size-sm rounded mb-0">Select Option</a>
				</td>
			</tr>
		</tbody>
	</table>
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