var middleNode = function (head) {
  let length = 0;
  let cursor = head;
  while (cursor) {
    cursor = cursor.next;
    length++;
  };
  let middle, i = 1;
  if (length % 2 === 0) {
    middle = length / 2 + 1;
  } else {
    middle = (length + 1) / 2;
  }
  cursor = head;
  while (i < middle) {
    i++;
    cursor = cursor.next;
  };
  return cursor;
};

middleNode = function (head) {
  let cursor1 = head;
  let cursor2 = head;

  while (cursor1.next) {
    cursor2 = cursor2.next;
    cursor1 = cursor1.next;
    if (cursor1.next) cursor1 = cursor1.next;
  };
  return cursor2;
};