#include <iostream>
using namespace std;

class Member {
private:
    string name;
    int age;

public:
    void addMember() {
        cout << "Enter Name: ";
        cin >> name;
        cout << "Enter Age: ";
        cin >> age;
    }

    void displayMember() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

int main() {
    Member m;
    m.addMember();
    m.displayMember();

    return 0;
}
float weight, height;

cout << "Enter Weight (kg): ";
cin >> weight;

cout << "Enter Height (m): ";
cin >> height;

float bmi = weight / (height * height);

cout << "BMI = " << bmi << endl;
if (bmi < 18.5)
{
    cout << "Workout Plan: Weight Gain Program" << endl;
}
else if (bmi < 25)
{
    cout << "Workout Plan: Maintain Fitness Program" << endl;
}
else
{
    cout << "Workout Plan: Weight Loss Program" << endl;
}
//Diet recommendation based on BMI
cout << "\nDiet Recommendation:\n";

if (bmi < 18.5)
{
    cout << "High Protein Diet with milk,eggs and nuts" << endl;
}
else if (bmi < 25)
{
    cout << "Balanced Diet" << endl;
}
else
{
    cout << "Low Calorie Diet" << endl;
}