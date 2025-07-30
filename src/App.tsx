import { useRef, useState, type FormEvent } from "react";
import dogMail from "./assets/dog-mail.png";
import logo from "./assets/logo.png";

function App() {
	const [subscribed, setSubscribed] = useState(false);
	const emailRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const email = emailRef.current?.value.trim();
		if (!email) return;

		setSubscribed(true);
		if (emailRef.current) {
			emailRef.current.value = "";
		}

		setTimeout(() => {
			setSubscribed(false);
		}, 4000);
	};

	return (
		<div className="min-h-screen bg-blue-50 flex flex-col">
			<nav className="w-full h-fit px-6 py-4 flex justify-end items-end gap-2">
				<img src={logo} alt="FurEver Friends Logo" className="w-10 md:w-12" />
				<h1 className="text-lg font-semibold text-gray-700">FurEver Friends Pet Care</h1>
			</nav>

			<main className="flex-1 flex flex-col items-center justify-center text-center px-4">
				<img
					src={dogMail}
					alt="Dog Mail"
					className={`w-40 md:w-56 lg:w-64 mb-6 transition-transform duration-500 `}
				/>

				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Something Paw-some is Coming!</h2>
				<p className="text-xl text-gray-600 max-w-md mb-6">
					We’re getting ready to pamper your pets. Be the first to know when we launch!
				</p>

				<form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center gap-3">
					<input
						ref={emailRef}
						type="email"
						required
						placeholder="Enter your email"
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
					/>
					<button
						disabled={subscribed}
						type="submit"
						className={`${subscribed ? "bg-green-400" : "bg-amber-400"} w-full hover:${
							subscribed ? "bg-green-300" : "bg-amber-500"
						} text-white px-5 py-2 rounded-md transition`}
					>
						{subscribed ? "Thanks for subscribing! 🐶✨" : "Subscribe"}
					</button>
				</form>

				<p className="text-sm text-gray-500 mt-2">No spam. Just cute pets and grooming deals.</p>
			</main>

			<footer className="text-xs text-gray-400 text-center py-4">
				© 2025 FurEver Friends Pet Care. All rights reserved. <br />
				Built with ❤️ by Alona B. Gomez
			</footer>
		</div>
	);
}

export default App;
