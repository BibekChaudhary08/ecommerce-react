import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* footer  */}
            <footer className="text-gray-600 body-font bg-pink-600">
                {/* main  */}
                <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                    {/* logo  */}
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <span className="text-xl font-bold">E-Bibek</span>
                    </a>
                    {/* para  */}
                    <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2024 eBibek —
                        <Link
                            to={'/'}
                            className="text-gray-100 ml-1"
                            rel="noopener noreferrer"
                        >
                            @eBibek
                        </Link>
                    </p>
                    
                    {/* media icon  */}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        {/* facebook  */}
                        <a className="text-gray-100 cursor-pointer" href="https://www.facebook.com/bibekoggu98">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>

                        {/* github */}
                        <a className="ml-3 text-gray-100 cursor-pointer" href="https://github.com/BibekChaudhary08">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="GitHub"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 0C5.373 0 0 5.373 0 12c0 5.301 3.438 9.801 8.207 11.385.6.111.793-.261.793-.578 0-.284-.012-1.037-.015-2.034-3.355.728-4.055-1.619-4.055-1.619-.547-1.385-1.336-1.755-1.336-1.755-1.092-.744.083-.729.083-.729 1.206.084 1.838 1.236 1.838 1.236 1.07 1.839 2.807 1.307 3.494.998.109-.775.42-1.307.764-1.604-2.67-.303-5.466-1.336-5.466-5.93 0-1.311.468-2.381 1.235-3.221-.124-.303-.535-1.522.117-3.17 0 0 1.007-.322 3.3 1.23.957-.267 1.98-.399 3.002-.403 1.021.004 2.045.136 3.004.403 2.291-1.552 3.297-1.23 3.297-1.23.656 1.648.244 2.867.12 3.17.771.84 1.233 1.91 1.233 3.221 0 4.606-2.799 5.623-5.476 5.92.429.372.81 1.102.81 2.216 0 1.603-.014 2.892-.014 3.286 0 .321.19.694.799.576C20.568 21.794 24 17.295 24 12c0-6.627-5.373-12-12-12"
                                ></path>
                            </svg>
                        </a>

                        {/* instagram  */}
                        <a className="ml-3 text-gray-100 cursor-pointer" href="https://www.instagram.com/bibekkusumiya?igsh=ZDhmcDkzcTcybmVj">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>

                        {/* linkedIn  */}
                        <a className="ml-3 text-gray-100 cursor-pointer" href="https://www.linkedin.com/in/bibek-chaudhari-a553b6270/">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={0}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
