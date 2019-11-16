---
title: Component - Pricing Table
menu_label: Component - Pricing Table
layout: documentation
category: Components
markup_language: html
relative_path: components/component-pricing-table
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Pricing Table</h1>
      <p>Timber provides a simple pricing table component that can be fully customized using utility classes. Use Timber's grid column utitlity classes to control the width of pricing table columns in different breakpoints.</p>
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Basic</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="pricing-table row border-grey-ultralight">
            <div class="pricing-table-column col w-6/12 w-md-6/12 rounded-l rounded-sm bg-white">
              <div class="pricing-table-header">
                <h3>Startup</h3>
              </div>
              <div class="pricing-table-price">
                <span class="price">
                  <sup class="currency">$</sup>350 <span class="interval">/month</span>
                </span>
              </div>
              <ul class="pricing-table-options">
                <li>Logo Proposition</li>
                <li><del>5 Page Website</del></li>
                <li><del>Domain + Hosting</del></li>
                <li><del>2 Months After Sale Support</del></li>
              </ul>
              <div class="pricing-table-footer">
                <a href="#" class="button rounded md">Select Option</a>
              </div>
            </div>
            <div class="pricing-table-column col w-6/12 w-md-6/12 rounded callout bg-blue color-white">
              <div class="pricing-table-header">
                <h3>Expert</h3>
              </div>
              <div class="pricing-table-price">
                <span class="price">
                  <sup class="currency">$</sup>950 <span class="interval">/month</span>
                </span>
              </div>
              <ul class="pricing-table-options">
                <li>Logo Proposition</li>
                <li>5 Page Website</li>
                <li>Domain + Hosting</li>
                <li>2 Months After Sale Support</li>
              </ul>
              <div class="pricing-table-footer">
                <a href="#" class="button rounded size-md bg-secondary">Select Option</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="pricing-table row border-grey-ultralight">
	<div class="pricing-table-column col w-6/12 w-md-6/12 rounded-l rounded-sm bg-white">
		<div class="pricing-table-header">
			<h3>Startup</h3>
		</div>
		<div class="pricing-table-price">
			<span class="price">
				<sup class="currency">$</sup>350
				<span class="interval">/month</span>
			</span>
		</div>
		<ul class="pricing-table-options">
			<li>Logo Proposition</li>
			<li><del>5 Page Website</del></li>
			<li><del>Domain + Hosting</del></li>
			<li><del>2 Months After Sale Support</del></li>
		</ul>
		<div class="pricing-table-footer">
			<a href="#" class="button rounded md">Select Option</a>
		</div>
	</div>
	<div class="pricing-table-column col w-6/12 w-md-6/12 rounded callout bg-blue color-white">
		<div class="pricing-table-header">
			<h3>Expert</h3>
		</div>
		<div class="pricing-table-price">
			<span class="price">
				<sup class="currency">$</sup>950
				<span class="interval">/month</span>
			</span>
		</div>
		<ul class="pricing-table-options">
			<li>Logo Proposition</li>
			<li>5 Page Website</li>
			<li>Domain + Hosting</li>
			<li>2 Months After Sale Support</li>
		</ul>
		<div class="pricing-table-footer">
			<a href="#" class="button rounded size-md bg-secondary">Select Option</a>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Customized With Utility Classes</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="pricing-table row">
            <div class="pricing-table-column w-6/12 w-md-6/12">
              <div class="pricing-table-header">
                <h3>Single</h3>
              </div>
              <div class="pricing-table-price bg-grey-ultralight">
                <span class="price h1"> Free <span class="interval">per month</span>
                </span>
              </div>
              <hr class="mt-0 mr-30 ml-30">
              <div class="pricing-table-text">
                <p>The Timber Free Commercial Developer License is for individual developers only.</p>
              </div>
              <div class="pricing-table-footer">
                <a href="#" class="button rounded md">Select Option</a>
              </div>
            </div>
            <div class="pricing-table-column w-6/12 w-md-6/12 shadow-x4 rounded bg-white shadow-lg">
              <div class="pricing-table-header bg-green color-white">
                <h3>Team</h3>
              </div>
              <div class="pricing-table-price bg-white">
                <span class="price h1">
                  <sup class="currency">$</sup>99 <span class="interval">per month</span>
                </span>
              </div>
              <hr class="mt-0 mr-30 ml-30">
              <div class="pricing-table-text">
                <p>The Timber Commercial Team License is for up to 10 developers in the same organisation.</p>
              </div>
              <div class="pricing-table-footer">
                <a href="#" class="button rounded md">Select Option</a>
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
	<div class="pricing-table row">
		<div class="pricing-table-column w-6/12 w-md-6/12">
			<div class="pricing-table-header">
				<h3>Single</h3>
			</div>
			<div class="pricing-table-price bg-grey-ultralight">
				<span class="price h1">
					Free
					<span class="interval">per month</span>
				</span>
			</div>
			<hr class="mt-0 mr-30 ml-30">
			<div class="pricing-table-text">
				<p>The Timber Free Commercial Developer License is for individual developers only.</p>
			</div>
			<div class="pricing-table-footer">
				<a href="#" class="button rounded md">Select Option</a>
			</div>
		</div>
		<div class="pricing-table-column w-6/12 w-md-6/12 shadow-x4 rounded bg-white shadow-lg">
			<div class="pricing-table-header bg-green color-white">
				<h3>Team</h3>
			</div>
			<div class="pricing-table-price bg-white">
				<span class="price h1">
					<sup class="currency">$</sup>99
					<span class="interval">per month</span>
				</span>
			</div>
			<hr class="mt-0 mr-30 ml-30">
			<div class="pricing-table-text">
				<p>The Timber Commercial Team License is for up to 10 developers in the same organisation.</p>
			</div>
			<div class="pricing-table-footer">
				<a href="#" class="button rounded md">Select Option</a>
			</div>
		</div>
	</div>
	</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-6/12 w-lg-6/12">
              <div class="pricing-table row border-white">
                <div class="pricing-table-column col w-full shadow-hover-x3 rounded shadow-lg">
                  <div class="pricing-table-header bg-white flex items-center justify-between">
                    <h3>Starter</h3>
                    <div class="pricing-table-price">
                      <span class="price">
                        <sup class="currency">$</sup>12 <span class="interval">per month</span>
                      </span>
                    </div>
                  </div>
                  <hr class="m-0">
                  <div class="pricing-table-text bg-white flex">
                    <p class="lead">Ideal for freelancers and small agencies looking for an easy way to collaborate on the fly.</p>
                  </div>
                  <div class="pricing-table-footer center bg-white">
                    <a href="#" class="button rounded">Select Option</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col w-6/12 w-lg-6/12">
              <div class="pricing-table rounded border-white">
                <div class="pricing-table-column col w-full shadow-hover-x3 rounded shadow-lg">
                  <div class="pricing-table-header bg-pink color-white flex items-center justify-between">
                    <h3>Expert</h3>
                    <div class="pricing-table-price">
                      <span class="price">
                        <sup class="currency">$</sup>18 <span class="interval">per month</span>
                      </span>
                    </div>
                  </div>
                  <div class="pricing-table-text bg-white">
                    <p class="lead">Perfect for mid sized teams of 10-30 people. Includes 200GB of cloud storage at no extra cost.</p>
                  </div>
                  <div class="pricing-table-footer center bg-white">
                    <a href="#" class="button rounded">Select Option</a>
                  </div>
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
	<div class="row pt-0">
		<div class="col w-6/12 w-lg-6/12">
			<div class="pricing-table row border-white">
				<div class="pricing-table-column col w-full shadow-hover-x3 rounded shadow-lg">
					<div class="pricing-table-header bg-white flex items-center justify-between">
						<h3>Starter</h3>
						<div class="pricing-table-price">
							<span class="price">
								<sup class="currency">$</sup>12
								<span class="interval">per month</span>
							</span>
						</div>
					</div>
					<hr class="m-0">
					<div class="pricing-table-text bg-white flex">
						<p class="lead">Ideal for freelancers and small agencies looking for an easy way to collaborate on the fly.</p>
					</div>
					<div class="pricing-table-footer center bg-white">
						<a href="#" class="button rounded">Select Option</a>
					</div>
				</div>
			</div>
		</div>
		<div class="col w-6/12 w-lg-6/12">
			<div class="pricing-table rounded border-white">
				<div class="pricing-table-column col w-full shadow-hover-x3 rounded shadow-lg">
					<div class="pricing-table-header bg-pink color-white flex items-center justify-between">
						<h3>Expert</h3>
						<div class="pricing-table-price">
							<span class="price">
								<sup class="currency">$</sup>18
								<span class="interval">per month</span>
							</span>
						</div>
					</div>
					<div class="pricing-table-text bg-white">
						<p class="lead">Perfect for mid sized teams of 10-30 people. Includes 200GB of cloud storage at no extra cost.</p>
					</div>
					<div class="pricing-table-footer center bg-white">
						<a href="#" class="button rounded">Select Option</a>
					</div>
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
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-full">
              <div class="pricing-table row">
                <div class="pricing-table-column col w-6/12 rounded-l rounded-md-t bg-white">
                  <div class="pricing-table-header flex items-center justify-between">
                    <h2>Startup</h2>
                    <span class="badge rounded bg-pink color-white">Money Saver</span>
                  </div>
                  <div class="pricing-table-price">
                    <span class="price">
                      <sup class="currency">$</sup>139 <span class="interval">per user/month</span>
                    </span>
                  </div>
                  <ul class="pricing-table-options">
                    <li>10 bots</li>
                    <li>Unlimited task requests</li>
                    <li>Dedicated support</li>
                    <li><del>Cancel anytime</del></li>
                    <li><del>Branding, website and mobile access</del></li>
                  </ul>
                  <div class="pricing-table-footer">
                    <a href="#" class="button rounded">Select Option</a>
                  </div>
                </div>
                <div class="pricing-table-column col w-6/12 rounded-r rounded-mb-b bg-white">
                  <div class="pricing-table-header flex items-center justify-between">
                    <h2>Expert</h2>
                    <span class="badge rounded bg-green color-white">Performance</span>
                  </div>
                  <div class="pricing-table-price">
                    <span class="price">
                      <sup class="currency">$</sup>289 <span class="interval">per user/month</span>
                    </span>
                  </div>
                  <ul class="pricing-table-options">
                    <li>Unlimited bots</li>
                    <li>Unlimited task requests</li>
                    <li>Dedicated support</li>
                    <li>Cancel anytime</li>
                    <li>Branding, website and mobile access</li>
                  </ul>
                  <div class="pricing-table-footer">
                    <a href="#" class="button rounded">Select Option</a>
                  </div>
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
	<div class="row pt-0">
		<div class="col w-full">
			<div class="pricing-table row">
				<div class="pricing-table-column col w-6/12 rounded-l rounded-md-t bg-white">
					<div class="pricing-table-header flex items-center justify-between">
						<h2>Startup</h2>
						<span class="badge rounded bg-pink color-white">Money Saver</span>
					</div>
					<div class="pricing-table-price">
						<span class="price">
							<sup class="currency">$</sup>139
							<span class="interval">per user/month</span>
						</span>
					</div>
					<ul class="pricing-table-options">
						<li>10 bots</li>
						<li>Unlimited task requests</li>
						<li>Dedicated support</li>
						<li><del>Cancel anytime</del></li>
						<li><del>Branding, website and mobile access</del></li>
					</ul>
					<div class="pricing-table-footer">
						<a href="#" class="button rounded">Select Option</a>
					</div>
				</div>
				<div class="pricing-table-column col w-6/12 rounded-r rounded-mb-b bg-white">
					<div class="pricing-table-header flex items-center justify-between">
						<h2>Expert</h2>
						<span class="badge rounded bg-green color-white">Performance</span>
					</div>
					<div class="pricing-table-price">
						<span class="price">
							<sup class="currency">$</sup>289
							<span class="interval">per user/month</span>
						</span>
					</div>
					<ul class="pricing-table-options">
						<li>Unlimited bots</li>
						<li>Unlimited task requests</li>
						<li>Dedicated support</li>
						<li>Cancel anytime</li>
						<li>Branding, website and mobile access</li>
					</ul>
					<div class="pricing-table-footer">
						<a href="#" class="button rounded">Select Option</a>
					</div>
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
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-6/12 w-md-6/12">
              <div>
                <div class="pricing-table row rounded bg-white">
                  <div class="pricing-table-column col w-full rounded">
                    <div class="pricing-table-header">
                      <span class="badge rounded text-normal bg-green color-white">Free</span>
                      <div class="pricing-table-price">
                        <span class="price display-lg">
                          <sup class="currency">$</sup>0 <span class="interval">/ month</span>
                        </span>
                      </div>
                    </div>
                    <hr class="mt-0 mr-30 ml-30">
                    <div class="pricing-table-text">
                      <p>Powerful compute instances with Intel CPUs and 100% SSD storage.</p>
                      <ul class="list-unstyled">
                        <li><strong>250 GB</strong> of storage</li>
                        <li><strong>1 TB</strong> of outbound transfer</li>
                        <li><strong>$0.03</strong> per additional GB stored</li>
                        <li><strong>$0.02</strong> per additional GB transferred</li>
                      </ul>
                    </div>
                    <div class="pricing-table-footer">
                      <a href="#" class="button rounded">Select Option</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col w-6/12 w-md-6/12">
              <div>
                <div class="pricing-table row bg-white">
                  <div class="pricing-table-column col w-full rounded">
                    <div class="pricing-table-header">
                      <span class="badge rounded text-normal bg-blue color-white">Team Pro</span>
                      <div class="pricing-table-price">
                        <span class="price display-lg">
                          <sup class="currency">$</sup>35 <span class="interval">/ month</span>
                        </span>
                      </div>
                    </div>
                    <hr class="mt-0 mr-30 ml-30">
                    <div class="pricing-table-text">
                      <p>Powerful compute instances with Intel CPUs and 100% SSD storage.</p>
                      <ul class="list-unstyled">
                        <li><strong>450 GB</strong> of storage</li>
                        <li><strong>2 TB</strong> of outbound transfer</li>
                        <li><strong>$0.02</strong> per additional GB stored</li>
                        <li><strong>$0.01</strong> per additional GB transferred</li>
                      </ul>
                    </div>
                    <div class="pricing-table-footer">
                      <a href="#" class="button rounded">Select Option</a>
                    </div>
                  </div>
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
	<div class="row pt-0">
		<div class="col w-6/12 w-md-6/12">
			<div>
				<div class="pricing-table row rounded bg-white">
					<div class="pricing-table-column col w-full rounded">
						<div class="pricing-table-header">
							<span class="badge rounded text-normal bg-green color-white">Free</span>
							<div class="pricing-table-price">
								<span class="price display-lg">
									<sup class="currency">$</sup>0
									<span class="interval">/ month</span>
								</span>
							</div>
						</div>
						<hr class="mt-0 mr-30 ml-30">
						<div class="pricing-table-text">
							<p>Powerful compute instances with Intel CPUs and 100% SSD storage.</p>
							<ul class="list-unstyled">
								<li><strong>250 GB</strong> of storage</li>
								<li><strong>1 TB</strong> of outbound transfer</li>
								<li><strong>$0.03</strong> per additional GB stored</li>
								<li><strong>$0.02</strong> per additional GB transferred</li>
							</ul>
						</div>
						<div class="pricing-table-footer">
							<a href="#" class="button rounded">Select Option</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col w-6/12 w-md-6/12">
			<div>
				<div class="pricing-table row bg-white">
					<div class="pricing-table-column col w-full rounded">
						<div class="pricing-table-header">
							<span class="badge rounded text-normal bg-blue color-white">Team Pro</span>
							<div class="pricing-table-price">
								<span class="price display-lg">
									<sup class="currency">$</sup>35
									<span class="interval">/ month</span>
								</span>
							</div>
						</div>
						<hr class="mt-0 mr-30 ml-30">
						<div class="pricing-table-text">
							<p>Powerful compute instances with Intel CPUs and 100% SSD storage.</p>
							<ul class="list-unstyled">
								<li><strong>450 GB</strong> of storage</li>
								<li><strong>2 TB</strong> of outbound transfer</li>
								<li><strong>$0.02</strong> per additional GB stored</li>
								<li><strong>$0.01</strong> per additional GB transferred</li>
							</ul>
						</div>
						<div class="pricing-table-footer">
							<a href="#" class="button rounded">Select Option</a>
						</div>
					</div>
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
        <h3 class="font-light">A Regular Pricing Table</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="table-scrollable">
            <table class="table striped size-lg rounded bg-white">
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
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="table-scrollable">
		<table class="table striped size-lg rounded bg-white">
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