import React from 'react';

export const Header = () => {
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Meteor Wallet</span>
              <img
                className="h-10 w-auto"
                src="/images/logo.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
