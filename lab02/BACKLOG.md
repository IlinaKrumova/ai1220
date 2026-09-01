# Backlog — SKIPline
Skipline students pre-order so that there is no line in the canteen. And its easier with payment and everytihng. 
## Items
- [F] Students need to see the canteen menu and prices before ordering.
- [F] Students need to place and pay for an order before arriving at the canteen.
- [F] Students need to know when their order will be ready for pickup.
- [F] Kitchen staff need to see incoming orders in the order they should be prepared.
- [F] Students need to identify themselves at pickup to get the right order.
- [NF] The system must handle at least 500 concurrent orders during lunch peak hours without delay.
- [NF] Order confirmation and payment must display within 2 seconds of submission.
- [NF] Student payment data must be stored securely and never visible to staff.
- [NF] The ordering system must keep working for students already in the ordering flow even if the food-court Wi-Fi drops mid-session.
## The change
The food services manager reported that the food court Wi-Fi drops during most lunch rushes — exactly when the ordering system is needed most. This became a new [NF] item, placed third in the backlog (right after menu display and ordering/payment) because it directly threatens whether the core flow works at all during peak use.
It did not enter Sprint 1, the sprint's goal is to get basic ordering and payment working end to end first. Building connectivity resilience before the base flow exists would be solving a problem for a feature that doesn't work yet. Nothing was displaced from Sprint 1 — the sprint stays as originally planned.
## From the assistant

Kept:

Rejected:
