import React, { useState } from "react";

const BuyNowButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltipToggle = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="relative inline-block">
      {/* Buy Now Button */}
      <a
        href="https://www.amazon.co.uk/stores/Wendy-Hudson/author/B01KK6KFKI?ref=dbs_a_mng_rwt_scns_share&isDramIntegrated=true&shoppingPortalEnabled=true"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex flex-col items-center justify-center bg-accent text-white px-4 py-2 rounded hover:bg-opacity-80 transition"
      >
        <span
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={handleTooltipToggle}
        >
          Buy Now
        </span>
        {/* "on Amazon" text visible only on small screens, moves to a new line */}
        <span className="lg:hidden block text-xs mt-1">on Amazon</span>
      </a>

      {/* Tooltip content */}
      {showTooltip && (
        <div
          className="absolute top-full left-3 transform -translate-x-1/2 mt-2 w-60 p-3 bg-white text-gray-700 text-sm rounded-md shadow-lg"
          style={{ zIndex: 10 }}
        >
          You will be redirected to Amazon to complete your purchase.
        </div>
      )}
    </div>
  );
};

export default BuyNowButton;
