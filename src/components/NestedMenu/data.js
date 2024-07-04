export const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
            children: [
              {
                label: "From Google",
                to: "",
              },
              {
                label: "From GitHub",
                to: "",
              },
            ],
          },
          {
            label: "Register",
            to: "register",
            children: [
              {
                label: "From Google",
                to: "",
              },
              {
                label: "From GitHub",
                to: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default menus;
