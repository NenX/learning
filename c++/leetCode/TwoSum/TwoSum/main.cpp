//
//  main.cpp
//  TwoSum
//
//  Created by 帆 on 2018/12/14.
//  Copyright © 2018年 帆. All rights reserved.
//

#include <iostream>
#include <vector>
using namespace std;
vector<int> twoSum(vector<int>&,int);
int main(int argc, const char * argv[]) {
    // insert code here...
    vector<int> t;
    t.push_back(2);
    t.push_back(4);
    t.push_back(5);
    t.push_back(8);

    int target = 9;

    return 0;
}
vector<int> twoSum(vector<int>& nums, int target) {
    for(int i:nums){
        cout<<i<<endl;
    }
    return nums;
}
