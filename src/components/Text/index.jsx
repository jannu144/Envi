import React from "react";

const sizeClasses = {
  txtRoundedMplus1cRegular8Black900: "font-normal font-roundedmplusc",
  txtGlutenBold64: "font-bold font-gluten",
  txtRoundedMplus1cMedium12: "font-medium font-roundedmplusc",
  txtRoundedMplus1cMedium10: "font-medium font-roundedmplusc",
  txtRoundedMplus1cMedium16: "font-medium font-roundedmplusc",
  txtSarabunExtraBold36: "font-extrabold font-sarabun",
  txtRoundedMplus1cRegular10: "font-normal font-roundedmplusc",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRoundedMplus1cRegular12: "font-normal font-roundedmplusc",
  txtRoundedMplus1cMedium20: "font-medium font-roundedmplusc",
  txtRoundedMplus1cRegular16: "font-normal font-roundedmplusc",
  txtRoundedMplus1cRegular15: "font-normal font-roundedmplusc",
  txtRoundedMplus1cRegular8: "font-normal font-roundedmplusc",
  txtRobotoRegular10: "font-normal font-roboto",
  txtRoundedMplus1cMedium8: "font-medium font-roundedmplusc",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
