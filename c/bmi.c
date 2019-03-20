#include <stdio.h>

float height_m_square (int height)
    {
        return (float) height*height/10000;
     }
float bmi(int weight, float height_m_square)
    {
        return (float) weight/height_m_square;
    }

int main () {
   
   int height, weight;

   printf("Enter your weight (in kilos):");
   scanf("%s", height);

   printf("Enter your height (in cm):");
   scanf("%s", weight);

   //printf("Enter your gender (male/female):");
   // scanf("%s", gender);

  // printf("Your heigth: %s\n", heigth);
  // printf("Your weigth:%s", weigth);
    printf ("Ваш индекс BMI равен \n", bmi (weight, height_m_square));
}

    
 //   int height, weight, age, rank;
//    printf("Enter your sex, m/f:");
 //   scanf("%c", &sex);
  //  printf("Enter your age:");
  //  scanf("%d", &age);
   // printf("Enter you height, cm:");
   // scanf("%d", &height);
   // printf("Enter your weight, kg:");
  //  scanf("%d", &weight);
  //  float bmi=bmicalc(height, weight);
  //  printf("\nYour BMI = %.2f \n", bmi);
  //  if(sex=='m') {
   //     if(bmi<20) {
   //         rank=1;
    //   } else if(bmi<25) {
    //        rank=2;
    //   } else if(bmi<30) {
    //        rank=3;
    //   } else {
    //        rank=4;
    //   }
   // } else if(sex=='f') {
    //    if(bmi<10) {
    //        rank=0;
    //    } else if(bmi<19) {
    //        rank=1;
    //    } else if(bmi<24) {
    //        rank=2;
    //    } else if(bmi<30) {
    //        rank=3;
    //    } else rank=4;
    //} else {
    //   printf("Who are you then?\n");
    //   rank=5;
   // }
   // if(rank==0) {
   //    printf("You are fairy\n");
   // } else if(rank==1) {
    //   printf("You are underwirghted\n");
    //} else if(rank==2) {
    //   printf("Your weight is normal\n");
   // } else if(rank==3) {
   //    printf("You are overweighted\n");
    //} else if(rank==4) {
    //   printf("You are bit too much overweighted\n");
   // } else {
   //     printf("Your weight is OK anyway\n");
   // }
   // printf("You could ask why you're asked about your age? I will tell you: I don't know");
//}
 //  
 //  return(0);
//}