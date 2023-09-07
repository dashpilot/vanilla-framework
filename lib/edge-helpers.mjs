function ifTrue(a, isTrue, isFalse = false) {
  if (a) {
    return isTrue;
  } else {
    return isFalse;
  }
}

function ifEq(a, b, isTrue, isFalse) {
  if (a == b) {
    return isTrue;
  } else {
    return isFalse;
  }
}
/*
function each(items, tpl) {
  var result = ``;
  items.forEach((item) => {
    result += `${item.title} - ${tpl}`;
  });
  return result;
}
*/

/*
${Object.keys(obj).map(key => (
    `<option value="${key}">${obj[key]}</option>`
)).join('')}
*/

export { ifTrue, ifEq };
