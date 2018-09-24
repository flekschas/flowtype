/*
 * ES6 FlowType.JS without jQuery.
 * Ported by Fritz Lekschas. Based on:
 *
 * FlowType.JS v1.1
 * Copyright 2013-2014, Simple Focus http://simplefocus.com/
 *
 * FlowType.JS by Simple Focus (http://simplefocus.com/)
 * is licensed under the MIT License. Read a copy of the
 * license in the LICENSE.txt file or at
 * http://choosealicense.com/licenses/mit
 *
 * Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
 */

import withRaf from "with-raf";

const createFlowtype = (
  element,
  {
    maximum = 1280,
    minimum = 500,
    maxFont = 40,
    minFont = 12,
    fontRatio = 30
  } = {}
) => {
  const calculateFontSize = () => {
    const elw = element.clientWidth;
    const width = elw > maximum ? maximum : elw < minimum ? minimum : elw;
    const fontBase = width / fontRatio;
    const fontSize =
      fontBase > maxFont ? maxFont : fontBase < minFont ? minFont : fontBase;

    element.style.fontSize = fontSize + "px";
  };

  const update = withRaf(calculateFontSize);
  const destroy = () => {
    window.removeEventListener("resize", update, false);
    window.removeEventListener("orientationchange", update, false);
  };

  // Make changes upon resize
  window.addEventListener("resize", update, false);
  window.addEventListener("orientationchange", update, false);

  // Initialize
  update();

  return {
    update,
    destroy
  };
};

export default createFlowtype;
