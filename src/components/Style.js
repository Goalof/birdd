import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<style>
html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: white;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu,
    roboto, noto, segoe ui, arial, sans-serif;
  background: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}

#root {
  overflow: hidden;
  background: #f0f0f0;
}

.card1,
.card2,
.card3,
.card4 {
  position: absolute;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
}

.card1 {
  min-width: 60ch;
  min-height: 60ch;
  width: 45vw;
  height: 45vw;
  max-width: 100ch;
  max-height: 100ch;
  background-image: url(https://image.flaticon.com/icons/svg/119/119596.svg);
}

.card2 {
  width: 25ch;
  height: 25ch;
  background-image: url(https://image.flaticon.com/icons/svg/789/789395.svg);
}

.card3 {
  opacity: 0.9;
  width: 25ch;
  height: 25ch;
  background-image: url(https://image.flaticon.com/icons/svg/414/414927.svg);
}

.card4 {
  width: 25ch;
  height: 25ch;
  background-image: url(https://image.flaticon.com/icons/svg/789/789392.svg);
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});