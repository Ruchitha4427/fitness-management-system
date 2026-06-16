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
//Main menu section
cout << "=================================" << endl;
cout << " FITNESS MANAGEMENT SYSTEM " << endl;
cout << "=================================" << endl;
cout << "1. Add Member" << endl;
cout << "2. Calculate BMI" << endl;
cout << "3. Workout Plan" << endl;
cout << "4. Diet Plan" << endl;
cout << "=================================" << endl;

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
cout << "\n=====Diet Recommendation:=====\n";

if (bmi < 18.5)
{
    cout << "High Protein Diet with milk,eggs and nuts" << endl;
}
else if (bmi < 25)
{
    cout << "Balanced Diet with fruits and vegetables" << endl;
}
else
{
    cout << "Low Calorie Diet" << endl;
}