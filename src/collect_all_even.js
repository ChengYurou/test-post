function collect_same_elements(collection_a, object_b) {
  var valueArray = [];

  collection_a.forEach(function (item) {

    if (if_same_element(item.key, object_b)) {

      valueArray.push(item.key);
    }
  });

  return valueArray;
}

function if_same_element(key, object) {
  var temp = false;

  object.value.forEach(function (element) {

    if (element === key) {

      temp = true;
    }
  });

  return temp;
}

module.exports = collect_same_elements;
