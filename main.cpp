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