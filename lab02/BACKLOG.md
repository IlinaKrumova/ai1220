# Backlog — SKIPline
Skipline students pre-order so that there is no line in the canteen. And its easier with payment and everytihng. 
## Items
- [F] Students need to see the canteen menu and prices before ordering.
- [F] Students need to place and pay for an order before arriving at the canteen.
- [F] Students need to know when their order will be ready for pickup.
- [F] Students need to get a push notification when their order is ready. (assistant)
- [F] Kitchen staff need to see incoming orders in the order they should be prepared.
- [F] Canteen staff need to mark an order as "picked up" to close it out. (assistant)
- [F] Students need to identify themselves at pickup to get the right order.
- [NF] The system must handle at least 500 concurrent orders during lunch peak hours without delay.
- [NF] Order confirmation and payment must display within 2 seconds of submission.
- [NF] Student payment data must be stored securely and never visible to staff.
- [NF] The ordering system must keep working for students already in the ordering flow even if the food-court Wi-Fi drops mid-session.
## The change
The food services manager reported that the food court Wi-Fi drops during most lunch rushes — exactly when the ordering system is needed most. This became a new [NF] item, placed third in the backlog (right after menu display and ordering/payment) because it directly threatens whether the core flow works at all during peak use.
It did not enter Sprint 1, the sprint's goal is to get basic ordering and payment working end to end first. Building connectivity resilience before the base flow exists would be solving a problem for a feature that doesn't work yet. Nothing was displaced from Sprint 1 — the sprint stays as originally planned.
## From the assistant
- [F] Students need to cancel an order before it starts being prepared.
- [F] Students need to reorder a previous order in one step.
- [NF] The interface must be usable by students with visual impairments (screen-reader compatible).
- [F] Canteen staff need to mark an order as "picked up" to close it out.
- [F] Students need to get a push notification when their order is ready.
Kept:
- Students need to get a push notification when their order is ready. (assistant)
- Canteen staff need to mark an order as "picked up" to close it out. (assistant)
Rejected:
- Students need to cancel an order before it starts being prepared. — Adds complexity to the kitchen workflow before the basic flow is even proven; not essential for Sprint 1 scope.
- Students need to reorder a previous order in one step. — A convenience feature, not a core need for launch.
- The interface must be usable by students with visual impairments (screen-reader compatible). — Important long-term, but belongs in a broader accessibility review rather than a single backlog line item right now.