# Plan — SKIPline

## Process choice

### How stable and binding are the requirements?
Requirements are likely to change as we learn what students and canteen staff actually needs. Payments and menu display needs may shift after feedback.
### How quickly can real feedback arrive?
Real feedback can arrive quickly we can pilot ordering with one canteen counter and a handful of students within a week or two and observe.
### What does failure cost?
Failure is low-cost early on, a broken prototype just means students go back to queueing as before. It becomes costly only once the canteen relies on it for daily service.
### How many pieces must move together?
Few pieces need to move together at first - ordering, payment and pickup can be built and tested as small independent steps rather than one big release.
Verdict:
Short increments. The requirements are uncertain, feedback is fast to get and failure is cheap early on all of which favor building and testing in small steps rather than fully planning up front.
## Milestones

| Milestone | When | What is true then |
| Menu display working | Week 2 | Students can view the full canteen menu with prices on the ordering page. |
| Ordering and payment live | Week 4 | A student can place and pay for an order end to end. |
| Pilot with real students | Week 6 | At least 10 students have used SkipLine to order food for pickup. |

## Risks

| Risk | Likelihood | Mitigation |
| Payment provider integration takes longer than expected | Medium | Start payment integration early, in parallel with menu display, and use a simple sandbox provider for testing. |
| Canteen staff are unfamiliar with the incoming-orders screen | Medium | Run a short training session with kitchen staff before the pilot week and provide a one-page printed guide. |
