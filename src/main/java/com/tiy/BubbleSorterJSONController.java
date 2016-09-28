package com.tiy;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

/**
 * Created by jessicatracy on 9/28/16.
 */
@RestController
public class BubbleSorterJSONController {
    BubbleSorter myBubbleSorter = new BubbleSorter();
//    @RequestMapping(path = "/sort.json", method = RequestMethod.GET)
//    public int[] inputStringSort(String inputString) {
//        String[] arrayOfStrings = inputString.split(" ");
//        int[] arrayToSort = new int[arrayOfStrings.length];
//        for (int index = 0; index < arrayOfStrings.length; index++) {
//            arrayToSort[index] = Integer.valueOf(arrayOfStrings[index]);
//        }
//        myBubbleSorter.bubbleSort(arrayToSort);
//        return arrayToSort;
//    }

    @RequestMapping(path = "/sort.json", method = RequestMethod.GET)
    public ArrayList<ArrayList<Integer>> inputStringSort(String inputString) {
        String[] arrayOfStrings = inputString.split(" ");
        int[] arrayToSort = new int[arrayOfStrings.length];
        for (int index = 0; index < arrayOfStrings.length; index++) {
            arrayToSort[index] = Integer.valueOf(arrayOfStrings[index]);
        }
        ArrayList<ArrayList<Integer>> arrayOfSteps = myBubbleSorter.bubbleSortArrayOfSteps(arrayToSort);
        System.out.println(arrayOfSteps);
        return arrayOfSteps;
    }
}
