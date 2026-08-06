graph LR
    subgraph CarePoint Hospital System
        UC1(Authenticate / Login)
        UC2(Book / Cancel Appointment)
        UC3(View EHR & Prescriptions)
        UC4(Pay Invoices Online)
        UC5(View Doctor Schedule)
        UC6(Write Prescription)
        UC7(Order Lab Test)
        UC8(Walk-in Registration)
        UC9(Bed Allocation & Discharge)
        UC10(Dispense Medicine)
        UC11(Manage Inventory)
        UC12(Upload Lab Reports)
        UC13(User & Role Management)
    end

    Patient --> UC1
    Patient --> UC2
    Patient --> UC3
    Patient --> UC4

    Doctor --> UC1
    Doctor --> UC5
    Doctor --> UC3
    Doctor --> UC6
    Doctor --> UC7

    Receptionist --> UC8
    Receptionist --> UC9

    Pharmacist --> UC10
    Pharmacist --> UC11

    LabTech --> UC12

    Admin --> UC13
