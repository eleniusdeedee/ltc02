#include "stdio.h"


float bmicalculation(float h, float w)
     {
         return (w*10000)/(h*h); 
     };

int main() {

    float height;
    float weight;
    char gender;


    printf("Would you mind terribly to enter your weight (in kilos):\n ");
    scanf("%f", &weight);
    printf("Would you be so kind to enter your height (in cm): \n");
    scanf("%f", &height);
  //  printf("You can only choose out of two gender options :( so male or female (m/f): \n");
  //  scanf("%c", &gender);


    float bmi = bmicalculation(height, weight);
    printf("Your BMI is %.1f \n", bmi);

    if (bmi < 18.5) 
    {
        printf("You're in the underweight range\n");
    } 
    else if (bmi >= 18.5 && bmi < 25) 
    {
        printf("You're in the healthy weight range\n");
    } 
    else if (bmi >= 25 && bmi < 30) {
        printf("You're in the overweight range\n");
    }
    else if (bmi >= 30 && bmi < 39.9) {
        printf("You're in the obese range\n");
    }
     else {
        printf("Well, I don't think you exist according to NHS guidelines\n");
    };

};