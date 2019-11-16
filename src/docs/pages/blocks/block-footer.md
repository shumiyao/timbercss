---
title: Partial - Footer
menu_label: Partial - Footer
layout: documentation
category: Blocks
markup_language: html
relative_path: blocks/block-footer
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Block: Footer</h1>
      <p class="mb-10">Heros provide a simple container with some basic CSS to help you better contorl how the hero content appears. It uses Timber's row and column structure to create great looking layouts. This also means that Timber's utility classes can be used to change it's appearance in different breakpoints.</p>
      <h3 class="font-light mt-80">Simple Hero</h3>
      <!-- Footer Logo Left -->
      <footer class="footer mt-80 footer-light">
        <div class="footer-top">
          <div class="row">
            <div class="col w-3/12 w-md-full">
              <div class="footer-block">
                <div class="footer-logo">
                  <a href="index.html"><img src="../images/logo-dark.png" alt="Boilerplate Logo"></a>
                </div>
              </div>
            </div>
            <div class="col w-9/12 w-md-full">
              <div class="row">
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 1</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 2</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 3</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 4</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row">
            <div class="col w-full">
              <div class="footer-bottom-inner flex justify-between">
                <p class="copyright color-grey-dark">© ThemeMountain. All Rights Reserved. Released under MIT license.</p>
                <p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Footer Logo Left End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-1" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-1" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<footer class="footer footer-light">
	<div class="footer-top">
		<div class="row">
			<div class="col w-3/12 w-md-full">
				<div class="footer-block">
					<div class="footer-logo">
						<a href="index.html"><img src="../images/logo-dark.png" alt="Boilerplate Logo" /></a>
					</div>
				</div>
			</div>
			<div class="col w-9/12 w-md-full">
				<div class="row">
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 1</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 2</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 3</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 4</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="row">
			<div class="col w-full">
				<div class="footer-bottom-inner flex justify-between">
					<p class="copyright color-grey-dark">&copy; ThemeMountain. All Rights Reserved. Released under MIT license.</p>
					<p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
				</div>
			</div>
		</div>
	</div>
</footer>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Footer Logo Center -->
      <footer class="footer mt-80">
        <div class="footer-top">
          <div class="row">
            <div class="col w-2/12 w-md-full order-2 order-md-1 center left-md">
              <div class="footer-block">
                <div class="footer-logo">
                  <a href="index.html"><img src="../images/logo.png" alt="Boilerplate Logo"></a>
                </div>
              </div>
            </div>
            <div class="col w-5/12 w-md-full order-1 order-md-2 left">
              <div class="row">
                <div class="col w-6/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 1</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-6/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 2</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col w-5/12 w-md-full order-3 right left-md">
              <div class="row">
                <div class="col w-6/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 1</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-6/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 2</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row">
            <div class="col w-full">
              <div class="footer-bottom-inner flex justify-between">
                <p class="copyright color-grey-dark">© ThemeMountain. All Rights Reserved. Released under MIT license.</p>
                <p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Footer Logo Center End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-2" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-2" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<footer class="footer">
	<div class="footer-top">
		<div class="row">
			<div class="col w-2/12 w-md-full order-2 order-md-1 center left-md">
				<div class="footer-block">
					<div class="footer-logo">
						<a href="index.html"><img src="../images/logo.png" alt="Boilerplate Logo" /></a>
					</div>
				</div>
			</div>
			<div class="col w-5/12 w-md-full order-1 order-md-2 left">
				<div class="row">
					<div class="col w-6/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 1</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-6/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 2</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col w-5/12 w-md-full order-3 right left-md">
				<div class="row">
					<div class="col w-6/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 1</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-6/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 2</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="row">
			<div class="col w-full">
				<div class="footer-bottom-inner flex justify-between">
					<p class="copyright color-grey-dark">&copy; ThemeMountain. All Rights Reserved. Released under MIT license.</p>
					<p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
				</div>
			</div>
		</div>
	</div>
</footer>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Footer Logo Right -->
      <footer class="footer mt-80 footer-light">
        <div class="footer-top">
          <div class="row">
            <div class="col w-3/12 w-md-full order-2 order-md-1 right left-md">
              <div class="footer-block">
                <div class="footer-logo">
                  <a href="index.html"><img src="../images/logo-dark.png" alt="Boilerplate Logo"></a>
                </div>
              </div>
            </div>
            <div class="col w-9/12 w-md-full order-1">
              <div class="row">
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 1</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 2</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 3</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 4</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row">
            <div class="col w-full">
              <div class="footer-bottom-inner flex justify-between">
                <p class="copyright color-grey-dark">© ThemeMountain. All Rights Reserved. Released under MIT license.</p>
                <p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Footer Logo Right End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-3" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-3" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<footer class="footer footer-light">
	<div class="footer-top">
		<div class="row">
			<div class="col w-3/12 w-md-full order-2 order-md-1 right left-md">
				<div class="footer-block">
					<div class="footer-logo">
						<a href="index.html"><img src="../images/logo-dark.png" alt="Boilerplate Logo" /></a>
					</div>
				</div>
			</div>
			<div class="col w-9/12 w-md-full order-1">
				<div class="row">
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 1</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 2</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 3</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 4</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="row">
			<div class="col w-full">
				<div class="footer-bottom-inner flex justify-between">
					<p class="copyright color-grey-dark">&copy; ThemeMountain. All Rights Reserved. Released under MIT license.</p>
					<p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
				</div>
			</div>
		</div>
	</div>
</footer>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Footer Fluid Logo Left -->
      <footer class="footer mt-80">
        <div class="footer-top">
          <div class="row fluid">
            <div class="col w-2/12 w-lg-12">
              <div class="footer-block">
                <div class="footer-logo">
                  <a href="index.html"><img src="../images/logo.png" alt="Boilerplate Logo"></a>
                </div>
              </div>
            </div>
            <div class="col w-10/12 w-lg-12">
              <div class="row fluid collapse">
                <div class="col w-2/12 w-lg-3 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 1</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-2/12 w-lg-3 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 2</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-2/12 w-lg-3 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 3</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-2/12 w-lg-3 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 4</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-2/12 w-lg-3 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 5</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-2/12 w-lg-3 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 6</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row fluid">
            <div class="col w-full">
              <div class="footer-bottom-inner flex justify-between">
                <p class="copyright color-grey-dark">© ThemeMountain. All Rights Reserved. Released under MIT license.</p>
                <p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Footer Fluid Logo Left End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-4" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-4" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<footer class="footer">
	<div class="footer-top">
		<div class="row fluid">
			<div class="col w-2/12 w-lg-12">
				<div class="footer-block">
					<div class="footer-logo">
						<a href="index.html"><img src="../images/logo.png" alt="Boilerplate Logo" /></a>
					</div>
				</div>
			</div>
			<div class="col w-10/12 w-lg-12">
				<div class="row fluid collapse">
					<div class="col w-2/12 w-lg-3 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 1</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-2/12 w-lg-3 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 2</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-2/12 w-lg-3 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 3</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-2/12 w-lg-3 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 4</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-2/12 w-lg-3 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 5</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-2/12 w-lg-3 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 6</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="row fluid">
			<div class="col w-full">
				<div class="footer-bottom-inner flex justify-between">
					<p class="copyright color-grey-dark">&copy; ThemeMountain. All Rights Reserved. Released under MIT license.</p>
					<p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
				</div>
			</div>
		</div>
	</div>
</footer>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Footer Elements -->
      <footer class="footer mt-80 footer-light">
        <div class="footer-top">
          <div class="row">
            <div class="col w-7/12 w-md-full">
              <div class="footer-block">
                <div class="row">
                  <div class="col w-4/12 w-md-6/12">
                    <div class="footer-block">
                      <h4 class="footer-title mb-30">Navigate</h4>
                      <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                        <li><a href="#">Link 5</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col w-8/12 w-md-6/12">
                    <div class="footer-block">
                      <h4 class="footer-title mb-30">Contact</h4>
                      <ul>
                        <li class="mb-20">348 Greenpoint<br>Avenue Brooklyn, NY<br>+61 3928 3324</li>
                        <li class="mb-20">Mon - Fri 9am - 5pm </li>
                        <li class="mb-20"><a href="mailto:#">hello@company.io</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col w-5/12 w-md-full">
              <div class="footer-block">
                <h4 class="footer-title mb-30">Subscribe</h4>
                <p>The latest Leap news, articles, and resources, sent straight to your inbox every month.</p>
                <div class="form-container subscribe-form-container">
                  <form class="subscribe-form" action="#" method="post" novalidate="">
                    <div class="row">
                      <div class="col w-full">
                        <div class="field-wrapper">
                          <input type="email" name="email" class="form-email w-full form-element rounded size-sm" placeholder="Email address*" tabindex="2" required="">
                        </div>
                      </div>
                    </div>
                    <div class="row mb-20">
                      <div class="col w-full">
                        <input type="submit" value="Subscribe" class="form-submit w-full button rounded size-sm">
                        <div class="form-response show"></div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col w-full form-consent">
                        <div class="field-wrapper">
                          <input id="checkbox-signup-form-container" class="form-element checkbox" name="checkbox-consent" type="checkbox" required="">
                          <label for="checkbox-signup-form-container" class="checkbox-label consent-checkbox-label">I give my consent to be emailed about promotions and offers.</label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row">
            <div class="col w-full">
              <div class="footer-bottom-inner flex justify-between items-center">
                <div class="dropdown menu-up mr-20" data-update-selection="">
                  <a href="#" class="button size-sm rounded"><span>Dropup</span><span class="icon-material right">expand_less</span></a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">Dropdown item 1</a>
                    <a href="#" class="dropdown-item">Dropdown item 2</a>
                    <a href="#" class="dropdown-item">Dropdown item 3</a>
                    <a href="#" class="dropdown-item">Dropdown item 4</a>
                    <a href="#" class="dropdown-item">Dropdown item 5</a>
                    <a href="#" class="dropdown-item">Dropdown item 6</a>
                  </div>
                </div>
                <p class="copyright mb-0">© ThemeMountain. All Rights Reserved. Released under MIT license.</p>
                <ul class="social-list list-horizontal ml-auto mb-0">
                  <li>
                    <a href="#">
                      <span class="icon-brands size-sm facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-brands size-sm twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-brands size-sm fivehundred-px"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="scroll-to icon-material" data-scroll-type="window-scroll-to" data-scroll-y="0">arrow_upward</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Footer Elements End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-5" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-5" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<footer class="footer footer-light">
	<div class="footer-top">
		<div class="row">
			<div class="col w-7/12 w-md-full">
				<div class="footer-block">
					<div class="row">
						<div class="col w-4/12 w-md-6/12">
							<div class="footer-block">
								<h4 class="footer-title mb-30">Navigate</h4>
								<ul>
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
									<li><a href="#">Link 4</a></li>
									<li><a href="#">Link 5</a></li>
								</ul>
							</div>
						</div>
						<div class="col w-8/12 w-md-6/12">
							<div class="footer-block">
								<h4 class="footer-title mb-30">Contact</h4>
								<ul>
									<li class="mb-20">348 Greenpoint<br>Avenue Brooklyn, NY<br>+61 3928 3324</li>
									<li class="mb-20">Mon - Fri 9am - 5pm
									<li class="mb-20"><a href="mailto:#">hello@company.io</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col w-5/12 w-md-full">
				<div class="footer-block">
					<h4 class="footer-title mb-30">Subscribe</h4>
					<p>The latest Leap news, articles, and resources, sent straight to your inbox every month.</p>
					<div class="form-container subscribe-form-container">
						<form class="subscribe-form" action="#" method="post" novalidate>
							<div class="row">
								<div class="col w-full">
									<div class="field-wrapper">
										<input type="email" name="email" class="form-email w-full form-element rounded size-sm" placeholder="Email address*" tabindex="2" required>
									</div>
								</div>
							</div>
							<div class="row mb-20">
								<div class="col w-full">
									<input type="submit" value="Subscribe" class="form-submit w-full button rounded size-sm">
									<div class="form-response show"></div>
								</div>
							</div>
							<div class="row">
								<div class="col w-full form-consent">
									<div class="field-wrapper">
									 	<input id="checkbox-signup-form-container" class="form-element checkbox" name="checkbox-consent" type="checkbox" required="">
									 	<label for="checkbox-signup-form-container" class="checkbox-label consent-checkbox-label">I give my consent to be emailed about promotions and offers.</label>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="row">
			<div class="col w-full">
				<div class="footer-bottom-inner flex justify-between items-center">
					<div class="dropdown menu-up mr-20" data-update-selection>
						<a href="#" class="button size-sm rounded"><span>Dropup</span><span class="icon-material right">expand_less</span></a>
						<div class="dropdown-menu">
							<a href="#" class="dropdown-item">Dropdown item 1</a>
							<a href="#" class="dropdown-item">Dropdown item 2</a>
							<a href="#" class="dropdown-item">Dropdown item 3</a>
							<a href="#" class="dropdown-item">Dropdown item 4</a>
							<a href="#" class="dropdown-item">Dropdown item 5</a>
							<a href="#" class="dropdown-item">Dropdown item 6</a>
						</div>
					</div>
					<p class="copyright mb-0">&copy; ThemeMountain. All Rights Reserved. Released under MIT license.</p>
					<ul class="social-list list-horizontal ml-auto mb-0">
						<li>
							<a href="#">
								<span class="icon-brands size-sm facebook"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="icon-brands size-sm twitter"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="icon-brands size-sm fivehundred-px"></span>
							</a>
						</li>
						<li>
							<a href="#" class="scroll-to icon-material" data-scroll-type="window-scroll-to" data-scroll-y="0">arrow_upward</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</footer>
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