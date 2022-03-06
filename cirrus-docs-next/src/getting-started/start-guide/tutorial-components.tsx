import { wrapContent } from "../../../utils/iframe";

export const TutorialComplete: string = wrapContent(`<div class="bg-gray-000 min-h-100p">
	<section>
		<div class="header header-clear u-unselectable header-animated px-0 px-2-md">
			<div class="header-brand">
				<div class="nav-item no-hover">
					<a>
						<h6 class="tracking-tight">John Doe</h6>
					</a>
				</div>
				<div class="nav-item nav-btn" id="header-btn">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div class="header-nav" id="header-menu">
				<div class="nav-right text-sm">
					<div class="nav-item">
						<a href="#">Dribbble</a>
					</div>
					<div class="nav-item">
						<a href="#">LinkedIn</a>
					</div>
					<div class="nav-item">
						<a href="#">About</a>
					</div>
					<div class="nav-item">
						<a href="#">Contact</a>
					</div>
					<div class="nav-item">
						<a class="btn btn-black btn--sm py-0" href="#">View Work</a>
					</div>
				</div>
			</div>
		</div>

		<div class="hero">
			<div class="hero-body">
				<div class="content px-12-lg px-24-xl">
					<div class="u-flex u-items-center u-gap-4 u-flex-column u-gap-8-lg u-flex-row-md">
						<div>
							<img class="u-round-xs w-100p w-60p-sm w-auto-md u-shadow-lg" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
					</div>
							<div>
								<h1 class="headline-3">hey!</h1>
								<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
									nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	</section>

	<section class="mb-12">
		<div class="content px-2 px-12-lg px-24-xl">
			<h2>My Stats</h2>

			<div class="u-flex u-flex-column u-flex-row-md u-gap-5 u-gap-8-lg">
				<div>
					<div class="frame bg-white">
						<div class="frame__header u-text-center">
							<div>
								<figure class="avatar bg-transparent u-shadow-lg">
									<img src="https://images.unsplash.com/photo-1524135220673-c731600a1a50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"></figure>
									<div>
										<h6 class="frame__title">John Doe</h6>
										<div class="frame__subtitle">Freelance Dev + Photographer</div>
									</div>
							</div>
						</div>
						<div class="frame__body">
							<div class="px-2 py-2 bg-black u-round-sm u-shadow-lg">
								<div class="u-text-center text-white">
									<div class="u-flex u-justify-center u-gap-3">
										<div>
											<h6 class="mb-0">56</h6>
											<p class="uppercase font-bold text-sm">Clients</p>
										</div>
										<div>
											<h6 class="mb-0">100%</h6>
											<p class="uppercase font-bold text-sm">On Time</p>
										</div>
										<div>
											<h6 class="mb-0">4.8</h6>
											<p class="uppercase font-bold text-sm">Stars</p>
										</div>
									</div>
									<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
										fugiat
										nulla pariatur.</p>
								</div>
							</div>
						</div>
						<div class="frame__footer">
							<div class="space"></div>
							<div class="u-flex u-gap-1">
								<button class="btn-black outline">View Work</button>
								<button class="btn-black u-flex-grow-1">Hire Me</button>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div class="tag-container">
						<div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase u-shadow-sm">Adobe Suite</div>
						<div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase u-shadow-sm">Figma</div>
						<div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase u-shadow-sm">Invision</div>
						<div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase u-shadow-sm">UI Design</div>
						<div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase u-shadow-sm">UX Design</div>
						<div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase u-shadow-sm">Typography</div>
						<div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase u-shadow-sm">HTML</div>
						<div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase u-shadow-sm">CSS</div>
						<div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase u-shadow-sm">JavaScript</div>
						<div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase u-shadow-sm">TypeScript</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mb-12">
		<div class="content px-2 px-12-lg px-24-xl">
			<h3>Want to work together?</h3>
			<p>Drop me a line!</p>

			<div class="mb-1">
				<label class="m-0 mb-1"><b>Contact Info</b></label>
				<div class="u-flex u-gap-1">
					<input placeholder="Name" />
					<input placeholder="Email" />
                </div>
				</div>

				<div class="mb-1">
					<label class="m-0 mb-1"><b>Message</b></label>
					<textarea placeholder="Enter your message"></textarea>
				</div>

				<button class="btn-black u-pull-right">Submit</button>
			</div>
	</section>

	<div class="space"></div>
</div>`);

export const TutorialBase: string = wrapContent(`<div class="min-h-100p bg-gray-000">
<section>
  <div class="hero">
    <div class="hero-body">
      <div class="content px-12-lg px-24-xl">
        <div>
          <div>
            <img class="w-100p w-60p-sm w-auto-md" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
          </div>
          <div>
            <h1 class="headline-3">hey!</h1>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="mb-12">
  <div class="content px-2 px-12-lg px-24-xl">
    <h2>My Stats</h2>
  </div>
</section>
<section class="mb-12">
  <div class="content px-2 px-12-lg px-24-xl">
    <h3>Want to work together?</h3>
    <p>Drop me a line!</p>
  </div>
</section>
<div class="space"></div>
</div>`);

export const TutorialComponents: string = wrapContent(`<div class="bg-gray-000 min-h-100p">
  <section>
    <div class="header header-clear u-unselectable header-animated px-0 px-2-md">
      <div class="header-brand">
        <div class="nav-item no-hover">
          <a>
            <h6 class="tracking-tight">John Doe</h6>
          </a>
        </div>
        <div class="nav-item nav-btn" id="header-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="header-nav" id="header-menu">
        <div class="nav-right text-sm">
          <div class="nav-item">
            <a href="#">Dribbble</a>
          </div>
          <div class="nav-item">
            <a href="#">LinkedIn</a>
          </div>
          <div class="nav-item">
            <a href="#">About</a>
          </div>
          <div class="nav-item">
            <a href="#">Contact</a>
          </div>
          <div class="nav-item">
            <a class="btn btn-black btn--sm py-0" href="#">View Work</a>
          </div>
        </div>
      </div>
    </div>
    <div class="hero">
      <div class="hero-body">
        <div class="content px-12-lg px-24-xl">
          <div>
            <div>
              <img class="w-100p w-60p-sm w-auto-md" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
            </div>
            <div>
              <h1 class="headline-3">hey!</h1>
              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mb-12">
    <div class="content px-2 px-12-lg px-24-xl">
      <h2>My Stats</h2>
      <div>
        <div>
          <div class="frame bg-white">
            <div class="frame__header">
              <div>
                <figure class="avatar bg-transparent">
                  <img src="https://images.unsplash.com/photo-1524135220673-c731600a1a50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80">
                </figure>
                <div>
                  <h6 class="frame__title">John Doe</h6>
                  <div class="frame__subtitle">Freelance Dev + Photographer</div>
                </div>
              </div>
            </div>
            <div class="frame__body">
              <div class="px-2 py-2 bg-black">
                <div class="text-white">
                  <div>
                    <div>
                      <h6 class="mb-0">56</h6>
                      <p class="uppercase font-bold text-sm">Clients</p>
                    </div>
                    <div>
                      <h6 class="mb-0">100%</h6>
                      <p class="uppercase font-bold text-sm">On Time</p>
                    </div>
                    <div>
                      <h6 class="mb-0">4.8</h6>
                      <p class="uppercase font-bold text-sm">Stars</p>
                    </div>
                  </div>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
            </div>
            <div class="frame__footer">
              <div class="space"></div>
              <div>
                <button class="btn-black outline">View Work</button>
                <button class="btn-black">Hire Me</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="tag-container">
            <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">Adobe Suite</div>
            <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">Figma</div>
            <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">Invision</div>
            <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">UI Design</div>
            <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">UX Design</div>
            <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">Typography</div>
            <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">HTML</div>
            <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">CSS</div>
            <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">JavaScript</div>
            <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">TypeScript</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mb-12">
    <div class="content px-2 px-12-lg px-24-xl">
      <h3>Want to work together?</h3>
      <p>Drop me a line!</p>
      <div class="mb-1">
        <label class="m-0 mb-1">
          <b>Contact Info</b>
        </label>
        <div>
          <input placeholder="Name" />
          <input placeholder="Email" />
        </div>
      </div>
      <div class="mb-1">
        <label class="m-0 mb-1">
          <b>Message</b>
        </label>
        <textarea placeholder="Enter your message"></textarea>
      </div>
      <button class="btn-black">Submit</button>
    </div>
  </section>
  <div class="space"></div>
</div>`)
