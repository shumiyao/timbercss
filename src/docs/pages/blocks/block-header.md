---
title: Partial - Header
menu_label: Partial - Header
layout: documentation
category: Blocks
markup_language: html
relative_path: blocks/block-header
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Block: Header</h1>
      <p>Use these headers as a starting point.</p>
      <!-- Demo Block -->
      <div class="px-20 py-30 mt-80 mb-30 rounded bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <!-- Header Navigaton & Button Right, Logo Left -->
            <header class="header h-80 h-md-auto">
              <div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
                <div class="nav-bar row">
                  <div class="col w-full nav-bar-inner items-md-center">
                    <div class="logo mr-30">
                      <a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo"></a>
                    </div>
                    <nav class="navigation">
                      <ul class="inline-flex">
                        <li class="aux-navigation hidden block-md">
                          <div class="pr-0">
                            <a href="#main-navigation-1" class="navigation-show nav-icon collapsable">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <nav id="main-navigation-1" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 1 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 2 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto pr-0 pr-md-15"> Menu Item 3 </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header Navigaton & Button Right, Logo Left End -->
          </div>
        </div>
      </div>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-1" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-1" data-min-height="200" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<header class="header h-80 h-md-auto">
	<div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
		<div class="nav-bar row">
			<div class="col w-full nav-bar-inner items-md-center">
				<div class="logo mr-30">
					<a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo" /></a>
				</div>
				<nav class="navigation">
					<ul class="inline-flex">
						<li class="aux-navigation hidden block-md">
							<div class="pr-0">
								<a href="#main-navigation-1" class="navigation-show nav-icon collapsable">
									<span></span>
									<span></span>
									<span></span>
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<nav id="main-navigation-1" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md">
					<ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 1
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 2
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto pr-0 pr-md-15">
								Menu Item 3
							</a>
							<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
								<li>
									<a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
										Sub Menu Item 3
									</a>
									<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
										</li>
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
--></code></pre>
      </div>
      <!-- code -->
      <div class="px-20 py-30 mt-80 mb-30 rounded bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <!-- Header Navigaton & Button Right, Logo Left -->
            <header class="header h-80 h-md-auto">
              <div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
                <div class="nav-bar row">
                  <div class="col w-full nav-bar-inner items-md-center">
                    <div class="logo mr-30">
                      <a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo"></a>
                    </div>
                    <nav class="navigation">
                      <ul class="inline-flex">
                        <li class="aux-navigation hidden block-md">
                          <div class="pr-0">
                            <a href="#main-navigation-2" class="navigation-show nav-icon collapsable">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <nav id="main-navigation-2" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 1 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 2 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Menu Item 3 </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div class="pr-0 pr-md-15">
                            <a href="#" class="button size-sm rounded">Header Button</a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header Navigaton & Button Right, Logo Left End -->
          </div>
        </div>
      </div>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-2" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-2" data-min-height="200" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<header class="header h-80 h-md-auto">
	<div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
		<div class="nav-bar row">
			<div class="col w-full nav-bar-inner items-md-center">
				<div class="logo mr-30">
					<a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo" /></a>
				</div>
				<nav class="navigation">
					<ul class="inline-flex">
						<li class="aux-navigation hidden block-md">
							<div class="pr-0">
								<a href="#main-navigation-2" class="navigation-show nav-icon collapsable">
									<span></span>
									<span></span>
									<span></span>
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<nav id="main-navigation-2" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md">
					<ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 1
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 2
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
								Menu Item 3
							</a>
							<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
								<li>
									<a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
										Sub Menu Item 3
									</a>
									<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
										</li>
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<div>
								<a href="#" class="button size-sm rounded">Header Button</a>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
--></code></pre>
      </div>
      <!-- code -->
      <div class="px-20 py-30 mt-80 mb-30 rounded bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <!-- Header Navigaton & Button Right With Division, Logo Left -->
            <header class="header h-80 h-md-auto">
              <div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
                <div class="nav-bar row">
                  <div class="col w-full nav-bar-inner items-md-center">
                    <div class="logo mr-30">
                      <a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo"></a>
                    </div>
                    <nav class="navigation">
                      <ul class="inline-flex">
                        <li class="aux-navigation hidden block-md">
                          <div class="pr-0">
                            <a href="#main-navigation-3" class="navigation-show nav-icon collapsable">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <nav id="main-navigation-3" class="navigation with-division collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 1 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 2 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Menu Item 3 </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div class="pr-0 pr-md-15">
                            <a href="#" class="button size-sm rounded">Header Button</a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header Navigaton Right With Division, Logo Left End -->
          </div>
        </div>
      </div>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-3" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-3" data-min-height="200" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<header class="header h-80 h-md-auto">
	<div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
		<div class="nav-bar row">
			<div class="col w-full nav-bar-inner items-md-center">
				<div class="logo mr-30">
					<a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo" /></a>
				</div>
				<nav class="navigation">
					<ul class="inline-flex">
						<li class="aux-navigation hidden block-md">
							<div class="pr-0">
								<a href="#main-navigation-2" class="navigation-show nav-icon collapsable">
									<span></span>
									<span></span>
									<span></span>
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<nav id="main-navigation-2" class="navigation with-division collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md">
					<ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 1
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 2
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
								Menu Item 3
							</a>
							<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
								<li>
									<a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
										Sub Menu Item 3
									</a>
									<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
										</li>
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<div class="pr-0 pr-md-15">
								<a href="#" class="button size-sm rounded">Header Button</a>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
--></code></pre>
      </div>
      <!-- code -->
      <div class="px-20 py-30 mt-80 mb-30 rounded bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <!-- Header Navigaton & SNS Icons Right, Logo Left -->
            <header class="header h-80 h-md-auto">
              <div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
                <div class="nav-bar row">
                  <div class="col w-full nav-bar-inner items-md-center">
                    <div class="logo mr-30">
                      <a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo"></a>
                    </div>
                    <nav class="navigation order-2 order-md-1">
                      <ul class="flex items-stretch h-inherit">
                        <li>
                          <div>
                            <a href="#" class="nav-icon">
                              <span class="icon-brands twitter m-0"></span>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div>
                            <a href="#" class="nav-icon">
                              <span class="icon-brands facebook m-0"></span>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div class="pr-0 pr-md-15">
                            <a href="#" class="nav-icon">
                              <span class="icon-brands instagram m-0"></span>
                            </a>
                          </div>
                        </li>
                        <li class="aux-navigation hidden block-md">
                          <div class="pr-0">
                            <a href="#main-navigation-4" class="navigation-show nav-icon collapsable">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <nav id="main-navigation-4" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md order-1 order-md-2">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 1 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 2 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Menu Item 3 </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header Navigaton & SNS Icons Right, Logo Left End -->
          </div>
        </div>
      </div>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-4" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-4" data-min-height="200" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<header class="header h-80 h-md-auto">
	<div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
		<div class="nav-bar row">
			<div class="col w-full nav-bar-inner items-md-center">
				<div class="logo mr-30">
					<a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo" /></a>
				</div>
				<nav class="navigation order-2 order-md-1">
					<ul class="flex items-stretch h-inherit">
						<li>
							<div>
								<a href="#" class="nav-icon">
									<span class="icon-brands twitter m-0"></span>
								</a>
							</div>
						</li>
						<li>
							<div>
								<a href="#" class="nav-icon">
									<span class="icon-brands facebook m-0"></span>
								</a>
							</div>
						</li>
						<li>
							<div class="pr-0 pr-md-15">
								<a href="#" class="nav-icon">
									<span class="icon-brands instagram m-0"></span>
								</a>
							</div>
						</li>
						<li class="aux-navigation hidden block-md">
							<div class="pr-0">
								<a href="#main-navigation-4" class="navigation-show nav-icon collapsable">
									<span></span>
									<span></span>
									<span></span>
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<nav id="main-navigation-4" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md order-1 order-md-2">
					<ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 1
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 2
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
								Menu Item 3
							</a>
							<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
								<li>
									<a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
										Sub Menu Item 3
									</a>
									<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
										</li>
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
--></code></pre>
      </div>
      <!-- code -->
      <div class="px-20 py-30 mt-80 mb-30 rounded bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <!-- Header Navigaton & Cart Right, Logo Left -->
            <header class="header h-80 h-md-auto">
              <div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
                <div class="nav-bar row">
                  <div class="col w-full nav-bar-inner items-md-center">
                    <div class="logo mr-30">
                      <a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo"></a>
                    </div>
                    <nav class="navigation order-2 order-md-1">
                      <ul class="flex items-stretch h-inherit">
                        <li>
                          <div class="dropdown menu-right pr-0 pr-md-15">
                            <a href="#" class="nav-icon flex items-center h-inherit"><span class="icon-material m-0 size-lg">shopping_basket</span><span class="cart-indication"><span class="badge relative -pst-10 -psl-5 rounded-full bg-black text-tiny color-white">3</span></span></a>
                            <div class="dropdown-menu cart-overview w-300 p-20">
                              <div class="overflow-scroll h-200">
                                <div class="cart-item justify-between mb-20 relative">
                                  <div class="product-details flex items-center">
                                    <a href="single-product-device.html" class="product-thumbnail w-50 h-50 rounded mr-10 hide-sm">
                                      <img src="https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1401&amp;q=80" alt="">
                                    </a>
                                    <div>
                                      <h5 class="product-title mb-0 text-small font-bold color-grey-darkest">
                                        <a class="w-200 truncate block" href="single-product-device.html">Apple iPhone XR Blue</a>
                                      </h5>
                                      <span class="product-quantity text-small">1 x</span>
                                      <span class="product-price text-small"><span class="currency">$</span>278.00</span>
                                    </div>
                                  </div>
                                  <a href="#" class="product-remove icon-material size-sm m-0 absolute psr-0 pst-0 z-10 color-grey-light">cancel</a>
                                </div>
                                <div class="cart-item justify-between mb-20 relative">
                                  <div class="product-details flex items-center">
                                    <a href="single-product-device.html" class="product-thumbnail w-50 h-50 rounded mr-10 hide-sm">
                                      <img src="https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1401&amp;q=80" alt="">
                                    </a>
                                    <div>
                                      <h5 class="product-title mb-0 text-small font-bold color-grey-darkest">
                                        <a class="w-200 truncate block" href="single-product-device.html">Apple iPhone XR Blue</a>
                                      </h5>
                                      <span class="product-quantity text-small">1 x</span>
                                      <span class="product-price text-small"><span class="currency">$</span>278.00</span>
                                    </div>
                                  </div>
                                  <a href="#" class="product-remove icon-material size-sm m-0 absolute psr-0 pst-0 z-10 color-grey-light">cancel</a>
                                </div>
                                <div class="cart-item justify-between mb-20 relative">
                                  <div class="product-details flex items-center">
                                    <a href="single-product-device.html" class="product-thumbnail w-50 h-50 rounded mr-10 hide-sm">
                                      <img src="https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1401&amp;q=80" alt="">
                                    </a>
                                    <div>
                                      <h5 class="product-title mb-0 text-small font-bold color-grey-darkest">
                                        <a class="w-200 truncate block" href="single-product-device.html">Apple iPhone XR Blue</a>
                                      </h5>
                                      <span class="product-quantity text-small">1 x</span>
                                      <span class="product-price text-small"><span class="currency">$</span>278.00</span>
                                    </div>
                                  </div>
                                  <a href="#" class="product-remove icon-material size-sm m-0 absolute psr-0 pst-0 z-10 color-grey-light">cancel</a>
                                </div>
                                <div class="cart-item justify-between mb-20 relative">
                                  <div class="product-details flex items-center">
                                    <a href="single-product-device.html" class="product-thumbnail w-50 h-50 rounded mr-10 hide-sm">
                                      <img src="https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1401&amp;q=80" alt="">
                                    </a>
                                    <div>
                                      <h5 class="product-title mb-0 text-small font-bold color-grey-darkest">
                                        <a class="w-200 truncate block" href="single-product-device.html">Apple iPhone XR Blue</a>
                                      </h5>
                                      <span class="product-quantity text-small">1 x</span>
                                      <span class="product-price text-small"><span class="currency">$</span>278.00</span>
                                    </div>
                                  </div>
                                  <a href="#" class="product-remove icon-material size-sm m-0 absolute psr-0 pst-0 z-10 color-grey-light">cancel</a>
                                </div>
                                <div class="cart-item justify-between mb-20 relative">
                                  <div class="product-details flex items-center">
                                    <a href="single-product-device.html" class="product-thumbnail w-50 h-50 rounded mr-10 hide-sm">
                                      <img src="https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1401&amp;q=80" alt="">
                                    </a>
                                    <div>
                                      <h5 class="product-title mb-0 text-small font-bold color-grey-darkest">
                                        <a class="w-200 truncate block" href="single-product-device.html">Apple iPhone XR Blue</a>
                                      </h5>
                                      <span class="product-quantity text-small">1 x</span>
                                      <span class="product-price text-small"><span class="currency">$</span>278.00</span>
                                    </div>
                                  </div>
                                  <a href="#" class="product-remove icon-material size-sm m-0 absolute psr-0 pst-0 z-10 color-grey-light">cancel</a>
                                </div>
                              </div>
                              <hr class="my-10">
                              <div class="cart-amount flex items-center justify-between text-small font-bold uppercase"> Cart Total <span class="amount"><span class="currency">$</span>1685.00</span>
                              </div>
                              <hr class="mt-10 mb-20">
                              <div class="cart-actions flex items-center">
                                <a href="checkout.html" class="checkout button size-sm w-full m-0 rounded">Checkout</a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="aux-navigation hidden block-md">
                          <div class="pr-0">
                            <a href="#main-navigation-5" class="navigation-show nav-icon collapsable">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <nav id="main-navigation-5" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md order-1 order-md-2">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 1 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 2 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Menu Item 3 </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header Navigaton & Cart Right, Logo Left End -->
          </div>
        </div>
      </div>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-5" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-5" data-min-height="200" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<header class="header h-80 h-md-auto">
	<div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
		<div class="nav-bar row">
			<div class="col w-full nav-bar-inner items-md-center">
				<div class="logo mr-30">
					<a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo" /></a>
				</div>
				<nav class="navigation order-2 order-md-1">
					<ul class="flex items-stretch h-inherit">
						<li>
							<div class="dropdown menu-right pr-0 pr-md-15">
								<a href="#" class="nav-icon flex items-center h-inherit"><span class="icon-material m-0 size-lg">shopping_basket</span><span class="cart-indication"><span class="badge relative -pst-10 -psl-5 rounded-full bg-black text-tiny color-white">3</span></span></a>
								<div class="dropdown-menu cart-overview w-300 p-20">
									<div class="overflow-scroll h-200">
										<div class="cart-item justify-between mb-20 relative">
											<div class="product-details flex items-center">
												<a href="single-product-device.html" class="product-thumbnail w-50 h-50 rounded mr-10 hide-sm">
													<img src="https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80" alt="">
												</a>
												<div>
													<h5 class="product-title mb-0 text-small font-bold color-grey-darkest">
														<a class="w-200 truncate block" href="single-product-device.html">Apple iPhone XR Blue</a>
													</h5>
													<span class="product-quantity text-small">1 x</span>
													<span class="product-price text-small"><span class="currency">$</span>278.00</span>
												</div>
											</div>
											<a href="#" class="product-remove icon-material size-sm m-0 absolute psr-0 pst-0 z-10 color-grey-light">cancel</a>
										</div>
										<div class="cart-item justify-between mb-20 relative">
											<div class="product-details flex items-center">
												<a href="single-product-device.html" class="product-thumbnail w-50 h-50 rounded mr-10 hide-sm">
													<img src="https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80" alt="">
												</a>
												<div>
													<h5 class="product-title mb-0 text-small font-bold color-grey-darkest">
														<a class="w-200 truncate block" href="single-product-device.html">Apple iPhone XR Blue</a>
													</h5>
													<span class="product-quantity text-small">1 x</span>
													<span class="product-price text-small"><span class="currency">$</span>278.00</span>
												</div>
											</div>
											<a href="#" class="product-remove icon-material size-sm m-0 absolute psr-0 pst-0 z-10 color-grey-light">cancel</a>
										</div>
										<div class="cart-item justify-between mb-20 relative">
											<div class="product-details flex items-center">
												<a href="single-product-device.html" class="product-thumbnail w-50 h-50 rounded mr-10 hide-sm">
													<img src="https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80" alt="">
												</a>
												<div>
													<h5 class="product-title mb-0 text-small font-bold color-grey-darkest">
														<a class="w-200 truncate block" href="single-product-device.html">Apple iPhone XR Blue</a>
													</h5>
													<span class="product-quantity text-small">1 x</span>
													<span class="product-price text-small"><span class="currency">$</span>278.00</span>
												</div>
											</div>
											<a href="#" class="product-remove icon-material size-sm m-0 absolute psr-0 pst-0 z-10 color-grey-light">cancel</a>
										</div>
										<div class="cart-item justify-between mb-20 relative">
											<div class="product-details flex items-center">
												<a href="single-product-device.html" class="product-thumbnail w-50 h-50 rounded mr-10 hide-sm">
													<img src="https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80" alt="">
												</a>
												<div>
													<h5 class="product-title mb-0 text-small font-bold color-grey-darkest">
														<a class="w-200 truncate block" href="single-product-device.html">Apple iPhone XR Blue</a>
													</h5>
													<span class="product-quantity text-small">1 x</span>
													<span class="product-price text-small"><span class="currency">$</span>278.00</span>
												</div>
											</div>
											<a href="#" class="product-remove icon-material size-sm m-0 absolute psr-0 pst-0 z-10 color-grey-light">cancel</a>
										</div>
										<div class="cart-item justify-between mb-20 relative">
											<div class="product-details flex items-center">
												<a href="single-product-device.html" class="product-thumbnail w-50 h-50 rounded mr-10 hide-sm">
													<img src="https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80" alt="">
												</a>
												<div>
													<h5 class="product-title mb-0 text-small font-bold color-grey-darkest">
														<a class="w-200 truncate block" href="single-product-device.html">Apple iPhone XR Blue</a>
													</h5>
													<span class="product-quantity text-small">1 x</span>
													<span class="product-price text-small"><span class="currency">$</span>278.00</span>
												</div>
											</div>
											<a href="#" class="product-remove icon-material size-sm m-0 absolute psr-0 pst-0 z-10 color-grey-light">cancel</a>
										</div>
									</div>
									<hr class="my-10">
									<div class="cart-amount flex items-center justify-between text-small font-bold uppercase">
										Cart Total
										<span class="amount"><span class="currency">$</span>1685.00</span>
									</div>
									<hr class="mt-10 mb-20">
									<div class="cart-actions flex items-center">
										<a href="checkout.html" class="checkout button size-sm w-full m-0 rounded">Checkout</a>
									</div>
								</div>
							</div>
						</li>
						<li class="aux-navigation hidden block-md">
							<div class="pr-0">
								<a href="#main-navigation-5" class="navigation-show nav-icon collapsable">
									<span></span>
									<span></span>
									<span></span>
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<nav id="main-navigation-5" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md order-1 order-md-2">
					<ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 1
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 2
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
								Menu Item 3
							</a>
							<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
								<li>
									<a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
										Sub Menu Item 3
									</a>
									<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
										</li>
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
--></code></pre>
      </div>
      <!-- code -->
      <div class="px-20 py-30 mt-80 mb-30 rounded bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <!-- Header Navigaton Left & Button Right, Logo Left -->
            <header class="header h-80 h-md-auto">
              <div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
                <div class="nav-bar row">
                  <div class="col w-full nav-bar-inner items-md-center">
                    <div class="logo mr-30">
                      <a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo"></a>
                    </div>
                    <nav class="navigation order-2 order-md-1">
                      <ul class="flex items-stretch h-inherit">
                        <li>
                          <div class="pr-0 pr-md-15">
                            <a href="#" class="button size-sm rounded">Header Button</a>
                          </div>
                        </li>
                        <li class="aux-navigation hidden block-md">
                          <div class="pr-0">
                            <a href="#main-navigation-6" class="navigation-show nav-icon collapsable">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <nav id="main-navigation-6" class="navigation collapsable-target w-md-full block-md mr-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md order-1 order-md-2">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 1 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 2 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Menu Item 3 </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header Navigaton Left & Button Right, Logo Left End -->
          </div>
        </div>
      </div>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-6" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-6" data-min-height="200" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<header class="header h-80 h-md-auto">
	<div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
		<div class="nav-bar row">
			<div class="col w-full nav-bar-inner items-md-center">
				<div class="logo mr-30">
					<a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo" /></a>
				</div>
				<nav class="navigation order-2 order-md-1">
					<ul class="flex items-stretch h-inherit">
						<li>
							<div class="pr-0 pr-md-15">
								<a href="#" class="button size-sm rounded">Header Button</a>
							</div>
						</li>
						<li class="aux-navigation hidden block-md">
							<div class="pr-0">
								<a href="#main-navigation-6" class="navigation-show nav-icon collapsable">
									<span></span>
									<span></span>
									<span></span>
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<nav id="main-navigation-6" class="navigation collapsable-target w-md-full block-md mr-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md order-1 order-md-2">
					<ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 1
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 2
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
								Menu Item 3
							</a>
							<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
								<li>
									<a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
										Sub Menu Item 3
									</a>
									<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
										</li>
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
--></code></pre>
      </div>
      <!-- code -->
      <div class="px-20 py-30 mt-80 mb-30 rounded bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <!-- Header Navigaton Far Left/Right, Logo Center -->
            <header class="header h-80 h-md-auto">
              <div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
                <div class="nav-bar row">
                  <div class="col w-full nav-bar-inner items-md-center">
                    <nav class="navigation order-1 order-md-2">
                      <ul class="flex items-stretch h-inherit">
                        <li class="aux-navigation hidden block-md">
                          <div class="pr-0">
                            <a href="#main-navigation-7" class="navigation-show nav-icon collapsable">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <nav id="main-navigation-7" class="navigation collapsable-target w-md-full block-md mr-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md order-1 order-md-2">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item pl-0"> Menu Item 1 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Menu Item 2 </a>
                          <ul class="sub-menu w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul class="hidden items-stretch flex-md-col h-inherit h-md-auto reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 1 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Menu Item 2 </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                    <div class="logo order-2 order-md-1">
                      <div class="logo-inner">
                        <a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo"></a>
                      </div>
                    </div>
                    <nav class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md order-3">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 1 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto pr-0"> Menu Item 2 </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header Navigaton Far Left/Right, Logo Center End -->
          </div>
        </div>
      </div>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-7" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-7" data-min-height="200" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<header class="header h-80 h-md-auto">
	<div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
		<div class="nav-bar row">
			<div class="col w-full nav-bar-inner items-md-center">
				<nav class="navigation order-1 order-md-2">
					<ul class="flex items-stretch h-inherit">
						<li class="aux-navigation hidden block-md">
							<div class="pr-0">
								<a href="#main-navigation-7" class="navigation-show nav-icon collapsable">
									<span></span>
									<span></span>
									<span></span>
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<nav id="main-navigation-7" class="navigation collapsable-target w-md-full block-md mr-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md order-1 order-md-2">
					<ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item pl-0">
								Menu Item 1
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
								Menu Item 2
							</a>
							<ul class="sub-menu w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
								<li>
									<a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
										Sub Menu Item 3
									</a>
									<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
										</li>
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
					<ul class="hidden items-stretch flex-md-col h-inherit h-md-auto reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 1
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
								Menu Item 2
							</a>
							<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
								<li>
									<a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
										Sub Menu Item 3
									</a>
									<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
										</li>
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<div class="logo order-2 order-md-1">
					<div class="logo-inner">
						<a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo" /></a>
					</div>
				</div>
				<nav class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md order-3">
					<ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 1
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto pr-0">
								Menu Item 2
							</a>
							<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
								<li>
									<a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
										Sub Menu Item 3
									</a>
									<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
										</li>
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
--></code></pre>
      </div>
      <!-- code -->
      <div class="px-20 py-30 mt-80 mb-30 rounded bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <!-- Header Navigaton & Search Right, Logo Left -->
            <header class="header h-80 h-md-auto">
              <div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
                <div class="nav-bar row">
                  <div class="col w-full nav-bar-inner items-md-center">
                    <div class="logo mr-30">
                      <a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo"></a>
                    </div>
                    <nav class="navigation">
                      <ul class="inline-flex">
                        <li class="aux-navigation hidden block-md">
                          <div class="pr-0">
                            <a href="#main-navigation-8" class="navigation-show nav-icon collapsable">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <nav id="main-navigation-8" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 1 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Menu Item 2 </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div class="pr-0 pr-md-15">
                            <div class="form-container w-full mt-md-10">
                              <form action="#" method="post" novalidate="">
                                <div class="row">
                                  <div class="col w-8/12 pr-0 pr-sm-15">
                                    <div class="field-wrapper">
                                      <input type="search" name="search" class="form-search form-element  m-0 mb-sm-15 rounded-l rounded-sm" placeholder="Enter search term" tabindex="1" required="">
                                    </div>
                                  </div>
                                  <div class="col w-4/12 pl-0 pl-sm-15">
                                    <input type="submit" value="Search" class="form-submit button w-md-full m-0 rounded-r rounded-sm">
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header Navigaton & Search Right, Logo Left End -->
          </div>
        </div>
      </div>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-11" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-11" data-min-height="200" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<header class="header h-80 h-md-auto">
	<div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
		<div class="nav-bar row">
			<div class="col w-full nav-bar-inner items-md-center">
				<div class="logo mr-30">
					<a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo" /></a>
				</div>
				<nav class="navigation">
					<ul class="inline-flex">
						<li class="aux-navigation hidden block-md">
							<div class="pr-0">
								<a href="#main-navigation-8" class="navigation-show nav-icon collapsable">
									<span></span>
									<span></span>
									<span></span>
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<nav id="main-navigation-8" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md">
					<ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 1
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
								Menu Item 2
							</a>
							<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
								<li>
									<a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
										Sub Menu Item 3
									</a>
									<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
										</li>
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<div class="pr-0 pr-md-15">
								<div class="form-container w-full mt-md-10">
									<form action="#" method="post" novalidate="">
										<div class="row">
											<div class="col w-8/12 pr-0 pr-sm-15">
												<div class="field-wrapper">
													<input type="search" name="search" class="form-search form-element  m-0 mb-sm-15 rounded-l rounded-sm" placeholder="Enter search term" tabindex="1" required="">
												</div>
											</div>
											<div class="col w-4/12 pl-0 pl-md-15">
												<input type="submit" value="Search" class="form-submit button w-md-full m-0 rounded-r rounded-sm">
											</div>
										</div>
									</form>
								</div>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
--></code></pre>
      </div>
      <!-- code -->
      <div class="px-20 py-30 mt-80 mb-30 rounded bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <!-- Header Navigaton & Dropdown Right, Logo Left -->
            <header class="header h-80 h-md-auto">
              <div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
                <div class="nav-bar row">
                  <div class="col w-full nav-bar-inner items-md-center">
                    <div class="logo mr-30">
                      <a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo"></a>
                    </div>
                    <nav class="navigation order-2 order-md-1">
                      <ul class="flex items-stretch h-inherit">
                        <li>
                          <div class="dropdown menu-right pr-0 pr-md-15">
                            <a href="#" class="flex items-center py-10 pl-10 pr-15 mb-0 color-grey-darker color-hover-grey-darkest color-active-white bg-transparent bg-active-grey-darkest rounded">
                              <span class="thumbnail rounded-full mr-10 mb-0">
                                <img width="30" height="30" class="avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80" alt="">
                              </span> My Account<span class="icon-material m-0">expand_more</span>
                            </a>
                            <div class="dropdown-menu w-300 p-20">
                              <h5>Access Your Account</h5>
                              <div class="login-form-container">
                                <form class="login-form" action="#" method="post" novalidate="">
                                  <div class="row">
                                    <div class="col w-full">
                                      <div class="field-wrapper">
                                        <input type="text" name="login-email" class="form-name form-element rounded size-sm set-focus" placeholder="E-mail" tabindex="1" required="">
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col w-full">
                                      <div class="field-wrapper">
                                        <input type="password" name="login-password" class="form-email form-element rounded size-sm" placeholder="Password" tabindex="2" required="">
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col w-full">
                                      <div class="row flex">
                                        <div class="col w-6/12">
                                          <input type="submit" value="Sign In" class="form-submit button size-sm rounded bg-blue bg-hover-blue color-white color-hover-white" tabindex="3">
                                        </div>
                                        <div class="col w-6/12 flex items-center">
                                          <a class="recuperate-password ml-auto text-small" href="">Forgot password?</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                                <div class="form-response"></div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="aux-navigation hidden block-md">
                          <div class="pr-0">
                            <a href="#main-navigation-9" class="navigation-show nav-icon collapsable">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <nav id="main-navigation-9" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md order-1 order-md-2">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 1 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 2 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Menu Item 3 </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header Navigaton & Dropdown Right, Logo Left End -->
          </div>
        </div>
      </div>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-12" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-12" data-min-height="200" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--	<header class="header h-80 h-md-auto">
	<div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
		<div class="nav-bar row">
			<div class="col w-full nav-bar-inner items-md-center">
				<div class="logo mr-30">
					<a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo" /></a>
				</div>
				<nav class="navigation order-2 order-md-1">
					<ul class="flex items-stretch h-inherit">
						<li>
							<div class="dropdown menu-right pr-0 pr-md-15">
								<a href="#" class="flex items-center py-10 pl-10 pr-15 mb-0 color-grey-darker color-hover-grey-darkest color-active-white bg-transparent bg-active-grey-darkest rounded">
									<span class="thumbnail rounded-full mr-10 mb-0">
										<img width="30" height="30" class="avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="">
									</span>
									My Account<span class="icon-material m-0">expand_more</span>
								</a>
								<div class="dropdown-menu w-300 p-20">
									<h5>Access Your Account</h5>
									<div class="login-form-container">
										<form class="login-form" action="#" method="post" novalidate="">
											<div class="row">
												<div class="col w-full">
													<div class="field-wrapper">
														<input type="text" name="login-email" class="form-name form-element rounded size-sm set-focus" placeholder="E-mail" tabindex="1" required="">
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col w-full">
													<div class="field-wrapper">
														<input type="password" name="login-password" class="form-email form-element rounded size-sm" placeholder="Password" tabindex="2" required="">
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col w-full">
													<div class="row flex">
														<div class="col w-6/12">
															<input type="submit" value="Sign In" class="form-submit button size-sm rounded bg-blue bg-hover-blue color-white color-hover-white" tabindex="3">
														</div>
														<div class="col w-6/12 flex items-center">
															<a class="recuperate-password ml-auto text-small" href="">Forgot password?</a>
														</div>
													</div>
												</div>
											</div>
										</form>
										<div class="form-response"></div>
									</div>
								</div>
							</div>
						</li>
						<li class="aux-navigation hidden block-md">
							<div class="pr-0">
								<a href="#main-navigation-9" class="navigation-show nav-icon collapsable">
									<span></span>
									<span></span>
									<span></span>
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<nav id="main-navigation-9" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md order-1 order-md-2">
					<ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 1
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 2
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
								Menu Item 3
							</a>
							<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
								<li>
									<a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
										Sub Menu Item 3
									</a>
									<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
										</li>
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
--></code></pre>
      </div>
      <!-- code -->
      <div class="px-20 py-30 mt-80 mb-30 rounded bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <!-- Header Navigaton With Description Right, Logo Left -->
            <header class="header h-80 h-md-auto">
              <div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
                <div class="nav-bar row">
                  <div class="col w-full nav-bar-inner items-md-center">
                    <div class="logo mr-30">
                      <a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo"></a>
                    </div>
                    <nav class="navigation">
                      <ul class="inline-flex">
                        <li class="aux-navigation hidden block-md">
                          <div class="pr-0">
                            <a href="#main-navigation-10" class="navigation-show nav-icon collapsable">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <nav id="main-navigation-10" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto overflow-visible overflow-md-hidden active-md inactive-md">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item">
                            <span> Menu Item 1 <span class="description">description 1</span>
                            </span>
                          </a>
                        </li>
                        <li class="contains-sub-menu">
                          <a href="index.html" class="main-menu-item">
                            <span> Menu Item 3 <span class="description">description 2</span>
                            </span>
                          </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item">
                            <span> Menu Item 3 <span class="description">description 3</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item pr-0 pr-md-15">
                            <span> Menu Item 4 <span class="description">description 4</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header Navigaton With Description Right, Logo Left End -->
          </div>
        </div>
      </div>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-13" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-13" data-min-height="200" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<header class="header h-80 h-md-auto">
	<div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
		<div class="nav-bar row">
			<div class="col w-full nav-bar-inner items-md-center">
				<div class="logo mr-30">
					<div class="logo-inner">
						<a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo" /></a>
					</div>
				</div>
				<nav class="navigation">
					<ul class="inline-flex">
						<li class="aux-navigation hidden block-md">
							<div class="pr-0">
								<a href="#main-navigation-10" class="navigation-show nav-icon collapsable">
									<span></span>
									<span></span>
									<span></span>
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<nav id="main-navigation-10" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto overflow-visible overflow-md-hidden active-md inactive-md">
					<ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item">
								<span>
									Menu Item 1
									<span class="description">description 1</span>
								</span>
							</a>
						</li>
						<li class="contains-sub-menu">
							<a href="index.html" class="main-menu-item">
								<span>
									Menu Item 3
									<span class="description">description 2</span>
								</span>
							</a>
							<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="index.html" class="main-menu-item">
								<span>
									Menu Item 3
									<span class="description">description 3</span>
								</span>
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item pr-0 pr-md-15">
								<span>
									Menu Item 4
									<span class="description">description 4</span>
								</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
--></code></pre>
      </div>
      <!-- code -->
      <div class="px-20 py-30 mt-80 mb-30 rounded bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <!-- Pre-Header & Header Navigaton Right, Logo Left -->
            <header class="header h-md-auto">
              <div class="header-inner-top bg-grey-darkest">
                <div class="nav-bar row">
                  <div class="col w-8/12 left">
                    <p class="mb-0">Pre-header text here.</p>
                  </div>
                  <div class="col w-4/12 right left-sm">
                    <ul class="list-horizontal mb-0">
                      <li>
                        <a href="#" class="nav-icon">
                          <span class="icon-brands facebook"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="nav-icon">
                          <span class="icon-brands twitter"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="nav-icon">
                          <span class="icon-brands fivehundred-px"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="header-inner h-80 py-md-10 border-1 border-b border-grey-lightest">
                <div class="nav-bar row">
                  <div class="col w-full nav-bar-inner items-md-center">
                    <div class="logo mr-30">
                      <a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo"></a>
                    </div>
                    <nav class="navigation">
                      <ul class="inline-flex">
                        <li class="aux-navigation hidden block-md">
                          <div class="pr-0">
                            <a href="#main-navigation-11" class="navigation-show nav-icon collapsable">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <nav id="main-navigation-11" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 1 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 2 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto pr-0"> Menu Item 3 </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <!-- Pre-Header & Header Navigaton Right, Logo Left End -->
          </div>
        </div>
      </div>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-14" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-14" data-min-height="200" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<header class="header h-80 h-md-auto">
	<div class="header-inner-top bg-grey-darkest">
		<div class="nav-bar row">
			<div class="col row flex">
				<div class="col w-8/12 left">
					<p class="mb-0">Pre-header text here.</p>
				</div>
				<div class="col w-4/12 right left-sm">
					<ul class="list-horizontal mb-0">
						<li>
							<a href="#" class="nav-icon">
								<span class="icon-brands facebook"></span>
							</a>
						</li>
						<li>
							<a href="#" class="nav-icon">
								<span class="icon-brands twitter"></span>
							</a>
						</li>
						<li>
							<a href="#" class="nav-icon">
								<span class="icon-brands fivehundred-px"></span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
		<div class="nav-bar row">
			<div class="col w-full nav-bar-inner items-md-center">
				<div class="logo mr-30">
					<a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo" /></a>
				</div>
				<nav class="navigation">
					<ul class="inline-flex">
						<li class="aux-navigation hidden block-md">
							<div class="pr-0">
								<a href="#main-navigation-11" class="navigation-show nav-icon collapsable">
									<span></span>
									<span></span>
									<span></span>
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<nav id="main-navigation-11" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md">
					<ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 1
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 2
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto pr-0">
								Menu Item 3
							</a>
							<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
								<li>
									<a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
										Sub Menu Item 3
									</a>
									<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
										</li>
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
--></code></pre>
      </div>
      <!-- code -->
      <div class="px-20 py-30 mt-80 mb-30 rounded bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <!-- Header Navigaton & Dropdown Right, Logo Left -->
            <header class="header h-80 h-md-auto">
              <div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
                <div class="nav-bar row">
                  <div class="col w-full nav-bar-inner items-md-center">
                    <div class="logo mr-30">
                      <a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo"></a>
                    </div>
                    <nav class="navigation order-2 order-md-1">
                      <ul class="flex items-stretch h-inherit">
                        <li>
                          <div class="dropdown menu-right pr-0 pr-md-15">
                            <a href="#" class="nav-icon"> English<span class="icon-material">expand_more</span>
                            </a>
                            <ul class="dropdown-menu w-min-150">
                              <li><a href="#" class="sub-menu-item active">EN - English</a></li>
                              <li><a href="#" class="sub-menu-item">FR - French</a></li>
                              <li><a href="#" class="sub-menu-item">DE - German</a></li>
                              <li><a href="#" class="sub-menu-item">ES - Spanish</a></li>
                              <li><a href="#" class="sub-menu-item">RU - Russian</a></li>
                            </ul>
                          </div>
                        </li>
                        <li class="aux-navigation hidden block-md">
                          <div class="pr-0">
                            <a href="#main-navigation-12" class="navigation-show nav-icon collapsable">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <nav id="main-navigation-12" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md order-1 order-md-2">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 1 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 2 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Menu Item 3 </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header Navigaton & Dropdown Right, Logo Left End -->
          </div>
        </div>
      </div>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-15" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-15" data-min-height="200" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<header class="header">
	<div class="header-inner" style="z-index: 101;">
		<div class="row nav-bar">
			<div class="col w-full nav-bar-inner">
				<div class="logo mr-30">
					<a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo" /></a>
				</div>
				<nav class="navigation primary-navigation nav-block ml-auto mr-auto sub-menu-indicator">
					<ul class="inline-flex">
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 1
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 2
							</a>
						</li>
						<li class="contains-sub-menu">
							<a href="index.html" class="main-menu-item">
								Menu Item 3
							</a>
							<ul class="sub-menu">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
								</li>
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<nav class="navigation nav-block secondary-navigation">
					<ul class="inline-flex">
						<li>
							<div>
								<div class="dropdown menu-right pr-0 pr-md-15">
									<a href="#" class="nav-icon">
										English<span class="icon-material">expand_more</span>
									</a>
									<ul class="dropdown-menu">
										<li><a href="#" class="sub-menu-item active">EN - English</a></li>
										<li><a href="#" class="sub-menu-item">FR - French</a></li>
										<li><a href="#" class="sub-menu-item">DE - German</a></li>
										<li><a href="#" class="sub-menu-item">ES - Spanish</a></li>
										<li><a href="#" class="sub-menu-item">RU - Russian</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li class="aux-navigation hide">
							<div>
								<a href="#" class="navigation-show side-nav-show nav-icon"></a>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
--></code></pre>
      </div>
      <!-- code -->
      <div class="px-20 py-30 mt-80 mb-30 rounded bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <!-- Header Navigaton & Badges, Logo Left -->
            <header class="header h-80 h-md-auto">
              <div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
                <div class="nav-bar row">
                  <div class="col w-full nav-bar-inner items-md-center">
                    <div class="logo mr-30">
                      <a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo"></a>
                    </div>
                    <nav class="navigation">
                      <ul class="inline-flex">
                        <li class="aux-navigation hidden block-md">
                          <div class="pr-0">
                            <a href="#main-navigation-13" class="navigation-show nav-icon collapsable">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <nav id="main-navigation-13" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md">
                      <ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 1<span class="badge rounded ml-10 bg-pink color-white">New</span>
                          </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item"> Menu Item 2 </a>
                        </li>
                        <li>
                          <a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto pr-0"> Menu Item 3 </a>
                          <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                            <li>
                              <a href="#" class="sub-menu-item">Sub Menu Item 1<span class="badge rounded ml-10 bg-green color-white">New</span></a>
                            </li>
                            <li>
                              <a href="#" class="sub-menu-item strikethrough disabled">Sub Menu Item 2<span class="badge rounded ml-10 bg-black color-white">Removed</span></a>
                            </li>
                            <li>
                              <a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto"> Sub Menu Item 3 </a>
                              <ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 1</a>
                                </li>
                                <li>
                                  <a href="#" class="sub-menu-item">Sub Menu Item 2</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header Navigaton & Badges, Logo Left End -->
          </div>
        </div>
      </div>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-16" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-16" data-min-height="200" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<header class="header h-80 h-md-auto">
	<div class="header-inner py-md-10 border-1 border-b border-grey-lightest">
		<div class="nav-bar row">
			<div class="col w-full nav-bar-inner items-md-center">
				<div class="logo mr-30">
					<a href="../index.html"><img src="../images/logo-dark.svg" alt="Logo" /></a>
				</div>
				<nav class="navigation">
					<ul class="inline-flex">
						<li class="aux-navigation hidden block-md">
							<div class="pr-0">
								<a href="#main-navigation-13" class="navigation-show nav-icon collapsable">
									<span></span>
									<span></span>
									<span></span>
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<nav id="main-navigation-13" class="navigation collapsable-target w-md-full block-md ml-auto ml-md-0 mr-md-auto sub-menu-indicator overflow-visible overflow-md-hidden active-md inactive-md">
					<ul class="flex items-stretch flex-md-col h-inherit h-md-auto pt-md-30 reset-md-sub-menu block-md toggle-sub-menus">
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 1<span class="badge rounded ml-10 bg-pink color-white">New</span>
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item">
								Menu Item 2
							</a>
						</li>
						<li>
							<a href="index.html" class="main-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto pr-0">
								Menu Item 3
							</a>
							<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
								<li>
									<a href="#" class="sub-menu-item">Sub Menu Item 1<span class="badge rounded ml-10 bg-green color-white">New</span></a>
								</li>
								<li>
									<a href="#" class="sub-menu-item strikethrough disabled">Sub Menu Item 2<span class="badge rounded ml-10 bg-black color-white">Removed</span></a>
								</li>
								<li>
									<a href="index.html" class="sub-menu-item contains-sub-menu pointer-events-none pointer-md-events-auto">
										Sub Menu Item 3
									</a>
									<ul class="sub-menu sub-menu-right w-min-md-auto relative-md visible-md opacity-md-100 shadow-md-none h-md-0 overflow-md-hidden">
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 1</a>
										</li>
										<li>
											<a href="#" class="sub-menu-item">Sub Menu Item 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block End -->
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