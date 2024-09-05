const NAVBAR = `<div class="navbar-container">
			<ul class="navbar-left">
				<li class="content-highest navbar-item">
					<a href="/">Home</a>
				</li>
				<li class="content-highest navbar-item navbar-dropdown">
					<a href="/piano">Experiments &#x2BC6;</a>
					<ul style="display: none;">
						<li></li>
					</ul>
				</li>
			</ul>
			<ul class="navbar-right">
				<a class="content-highest navbar-item" href="https://github.com/Ortley">
					<img class="link" src="images/icons/github.png" alt="github logo">
				</a>
				<a class="content-highest navbar-item" href="https://steamcommunity.com/id/Ortley/">
					<img class="link" src="images/icons/steam.png" alt="steam logo">
				</a>
			</ul>
		</div>`

document.body.insertAdjacentHTML("afterbegin", NAVBAR)