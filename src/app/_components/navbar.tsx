export function Navbar() {
  return (
      <div className="flex flex-col gap-5 px-6 sm:px-12 lg:px-24 text-black ml-16">
          <svg
              clipRule="evenodd"
              fillRule="evenodd"
              height="20"
              width="30"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="-89.00934757 -46.8841404 643.93723344 446.8841404"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
                  d="m154.729 400c185.669 0 287.205-153.876 287.205-287.312 0-4.37-.089-8.72-.286-13.052a205.304 205.304 0 0 0 50.352-52.29c-18.087 8.044-37.55 13.458-57.968 15.899 20.841-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 0 1 -64.098 24.511c-18.42-19.628-44.644-31.904-73.682-31.904-55.744 0-100.948 45.222-100.948 100.965 0 7.925.887 15.631 2.619 23.025-83.895-4.223-158.287-44.405-208.074-105.504a100.739 100.739 0 0 0 -13.668 50.754c0 35.034 17.82 65.961 44.92 84.055a100.172 100.172 0 0 1 -45.716-12.63c-.015.424-.015.837-.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.036 101.036 0 0 1 -26.617 3.553c-6.493 0-12.821-.639-18.971-1.82 12.851 40.122 50.115 69.319 94.296 70.135-34.549 27.089-78.07 43.224-125.371 43.224a204.9 204.9 0 0 1 -24.078-1.399c44.674 28.645 97.72 45.359 154.734 45.359"
                  fill="#1da1f2"
                  fillRule="nonzero"
              />
          </svg>
          <span className="flex items-center gap-1 font-bold pt-2.5" role="button">
              <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  //viewBox="0 0 24 24" 
              >
                  <path
                      fillRule="evenodd"
                      d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                      clipRule="evenodd"
                  />
              </svg>
              Home
          </span>
          <span className="flex items-center gap-1 pt-2.5" role="button">
              <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  //viewBox="0 0 24 24"
              >
                  <path
                      stroke="black"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
              </svg>
              Explore
          </span>
          <span className="flex items-center gap-1 pt-2.5" role="button">
              <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  //viewBox="0 0 24 24"
              >
                  <path
                      stroke="black"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                  />
              </svg>
              Message
          </span>
          <span className="flex items-center gap-1 pt-2.5" role="button">
              <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  //viewBox="0 0 24 24"
              >
                  <path
                      stroke="black"
                      strokeWidth="2"
                      d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
              </svg>
              Profile
          </span>
          <div className="flex justify-center pt-2.5">
              <button
                  className="absolute bg-[#08a0e9] rounded-xl text-white flex justify-center items-center w-44 h-8"
                  role="button"
              >
                  Tweet
              </button>
          </div>
      </div>
  );
}