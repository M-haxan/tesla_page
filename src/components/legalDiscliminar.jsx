import React from "react";

const LegalDisclaimer = () => {
  return (
    <div className="px-6 py-10 text-sm text-gray-500 max-w-3xl mx-auto space-y-6">
      <div>
        <sup>1</sup> Model S and Model X included only when purchased through{" "}
        <a href="#" className="underline hover:text-gray-700">
          inventory
        </a>{" "}
        and must be model year 2025. Frost Blue Metallic excluded. New vehicles
        and U.S. only. Subject to availability. The cost of the color upgrade
        will be removed from the final price prior to delivery.
      </div>
      <div>
        <sup>2</sup> Model X All-Wheel Drive starts at $91,630. Price includes
        Destination and Order Fees but exclude taxes and other fees. Subject to
        change. Vehicle shown has upgrades that will increase the price.
      </div>
      <div>
        <sup>3</sup> Model S All-Wheel Drive starts at $86,630. Price includes
        Destination and Order Fees but exclude taxes and other fees. Subject to
        change. Vehicle shown has upgrades that will increase the price.
      </div>
      <div className="pt-10 border-t border-gray-300 text-center space-y-2">
        <p className="text-sm">Tesla © 2025</p>
        <div className="flex justify-center gap-4 text-sm">
          <a href="#" className="hover:underline">
            Privacy & Legal
          </a>
          <a href="#" className="hover:underline">
            Vehicle Recalls
          </a>
          <a href="#" className="hover:underline">
            News
          </a>
        </div>
      </div>
    </div>
  );
};
export default LegalDisclaimer;
