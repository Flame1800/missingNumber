// Алгоритм быстрой соритровки
// Находим опорное число и ставим числа меньше или равные ему слего от него
// а те что больше - справа, и повторяем эту операцию рекурсивно, каждый раз разделяя массив
const quickSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  const pivot = nums[0];

  const low = nums.slice(1).filter(num => num <= pivot);
  const high = nums.slice(1).filter(num => num > pivot);

  return quickSort(low).concat(pivot, quickSort(high));
}

// Функция находит первое пропущенное число в последовательности nums
const missingNumber = (nums) => {
  // Если передан не массив или undefined, возвращаем -1
  if (!Array.isArray(nums)) return -1;

  // Сначала отсортируем массив что бы у нас была последовательность по порядку
  // Можно использовать метод sort, но я хотел показать знание алгоритмов соритровки
  const sortNums = quickSort(nums)

  // Счетчик правильной последовательности
  // начинаем с первого числа отсоритрованного массива
  let startCount = sortNums[0];

  // Идем по массиву пока не встретим несоотвествие последовательности
  for (let i = 0; i < sortNums.length; i++) {
    if (sortNums[i] !== startCount) {
      // Возвращаем число которое должно было стоять предыдущим
      return sortNums[i] - 1;
    }

    // Увеличиваем счетчик
    startCount++;
  }

  // Если пропущеного числа нет, то возвращаем -1
  return -1;
}

module.exports = missingNumber;
