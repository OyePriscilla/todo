export const addToDo = (list, item) => list.push(item);

export const removeToDo = (listArray, index) => {
  listArray.splice(index, 1);
  return listArray;
};