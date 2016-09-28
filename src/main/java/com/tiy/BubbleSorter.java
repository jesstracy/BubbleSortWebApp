package com.tiy;

/**
 * Created by jessicatracy on 9/28/16.
 */
public class BubbleSorter {
    public void bubbleSort(int[] arrayToSort) {
        for (int counter = arrayToSort.length; counter >= 0; counter--) {
            for (int insideCounter = 0; insideCounter < arrayToSort.length - 1; insideCounter++) {
                if (arrayToSort[insideCounter] > arrayToSort[insideCounter + 1]) {
                    swapNums(insideCounter, insideCounter + 1, arrayToSort);
                }
            }
            printNums(arrayToSort);
        }
    }

    public void swapNums(int index1, int index2, int[] arrayToSort) {
        int holder = arrayToSort[index1];
        arrayToSort[index1] = arrayToSort[index2];
        arrayToSort[index2] = holder;
    }

    public void printNums(int[] arrayToSort) {
        for (int currentInt : arrayToSort) {
            System.out.print(currentInt + " ");
        }
        System.out.println("\n");
    }
}
