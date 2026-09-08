# CampusPulse requirements

Name or team:

Date:

Status: working draft

Use the source IDs `S1` to `S6` from the lab handout. Keep every requirement
short enough to test and trace.

## 1. Release scope

### In scope

List at least three capabilities that belong in the first release.
- Verified university groups and official badges
- Announcements and campus events
- Following groups and RSVP functionality
- Audience visibility and event update notifications
- Reporting, moderation, and appeals

### Out of scope

List at least two explicit exclusions.
- Direct messages
- External users
- Payments
- Video hosting
- AI recommendations
- Native mobile application

## 2. User requirements

Write at least five customer-readable needs. Use one need per line and trace it
to the stakeholder evidence.

Format: `UR-1 [Must] ... [Source: S1]`

- UR-1 [Must] Students can follow university groups and view their events and announcements in one place. [Source: S1]
- UR-2 [Must] Students can RSVP to events without their identity being publicly visible unless they choose otherwise. [Source: S1]
- UR-3 [Must] Approved group officers can collaboratively create and publish announcements and events for appropriate audiences. [Source: S2]
- UR-4 [Must] Students who RSVP to an event are informed when its time or location changes. [Source: S2]
- UR-5 [Must] Campus moderators can review reports, hide reported events, preserve evidence for appeals, and record moderation decisions. [Source: S3]
- UR-6 [Must] Attendance data for a cancelled event is deleted within 30 days. [Source: S5]

## 3. Functional requirements

Write at least six observable system behaviours. Start each one with "The
system shall" and trace it to one or more user requirements.

Format: `FR-1 [Must] The system shall ... [Source: UR-1]`
- FR-1 [Must] The system shall allow students to follow verified university groups and view their events and announcements. [Source: UR-1]
- FR-2 [Must] The system shall keep a student's RSVP identity private by default and allow the student to choose whether it is publicly visible. [Source: UR-2]
- FR-3 [Must] The system shall allow only approved group officers to publish announcements and events. [Source: UR-3]
- FR-4 [Must] The system shall allow group officers to set an event audience as university-wide or members-only. [Source: UR-3]
- FR-5 [Must] The system shall notify students who RSVP'd when an event's time or location changes. [Source: UR-4]
- FR-6 [Must] The system shall allow campus moderators to review reports, hide reported events, preserve evidence for appeals, and record who made each moderation decision. [Source: UR-5]

## 4. Non-functional requirements

Write at least four measurable quality requirements. State what is measured,
the target, and the condition under which the target applies. If you introduce
a number that is not in the handout, record it as an assumption or open
question in Section 8.

Format: `NFR-1 [Must] The system shall ... [Measure: target and condition] [Source: UR-1]`

- NFR-1 [Must] The system shall support at least 5,000 student accounts and 200 verified groups during the pilot. [Measure: 5,000 students and 200 groups supported before Orientation Week] [Source: UR-1]

- NFR-2 [Must] The system shall present RSVP identities as private by default for every newly created RSVP. [Measure: 100% of new RSVPs are private unless the student changes the visibility setting] [Source: UR-2]

- NFR-3 [Should] The system shall provide an accessible browser interface usable with common screen readers. [Measure: all core event, announcement, follow, and RSVP flows can be completed using a screen reader] [Source: UR-1]

- NFR-4 [Must] The system shall delete attendance data for cancelled events within 30 days of cancellation. [Measure: 100% of attendance records for cancelled events are deleted within 30 days] [Source: UR-6]

## 5. User stories and acceptance criteria

Write at least three stories from different stakeholder viewpoints. Each story
needs at least two acceptance criteria. Across the set, include a failure,
permission boundary, privacy rule, or other non-happy path.

### US-1 [Source: S?, UR-?]

As a student attendee,

I want my RSVP identity to be private by default,

so that I can attend events without automatically revealing my participation.

Acceptance criteria:

- When a student RSVPs to an event, their identity is not publicly visible by default.

- A student can choose to make their RSVP identity publicly visible.

### US-2 [Source: S?, UR-?]

As a group officer,

I want approved officers to create and publish events for different audiences,

so that our group can safely manage university-wide and members-only events.

Acceptance criteria:

- An approved group officer can publish an event and select university-wide or members-only visibility.

- A user who is not an approved group officer cannot publish an event for the group.

### US-3 [Source: S?, UR-?]

As a campus moderator,

I want to review reports and hide reported events while preserving evidence,

so that I can respond to harmful content and support later appeals.

Acceptance criteria:

- A moderator can view what was reported, the reason for the report, and hide the reported event.

- When an event is hidden, the evidence and the identity of the moderator who made the decision remain recorded for an appeal.

## 6. MoSCoW summary

List requirement or story IDs in every category. The Won't category must state
what is excluded from this release.

- Must: UR-1, UR-2, UR-3, UR-4, UR-5, UR-6, FR-1, FR-2, FR-3, FR-4, FR-5, FR-6, NFR-1, NFR-2, NFR-4, US-1, US-2, US-3
- Should: NFR-3
- Could: Additional notification preferences for event updates
- Won't this release: Direct messages, external users, payments, video hosting, AI recommendations, and a native mobile application

## 7. Traceability

Add at least four complete paths. Every row should connect evidence to a user
requirement, a system requirement, and a user story.

| Stakeholder need | User requirement | System requirement | User story |
|---|---|---|---|
| S1 - RSVP privacy | UR-2 | FR-2, NFR-2 | US-1 |
| S2 - Approved officers can publish | UR-3 | FR-3 | US-2 |
| S2 - Event audience visibility | UR-3 | FR-4 | US-2 |
| S3 - Moderation and appeal evidence | UR-5 | FR-6 | US-3 |

## 8. Assumptions and open questions

Separate decisions your team has assumed from questions that still need an
answer.

### Assumptions

- A1: The RSVP privacy requirement is interpreted as applying to 100% of newly created RSVPs by default.
- A2: Screen-reader accessibility is required for all core flows: viewing events and announcements, following groups, and RSVP.

### Open questions

- Q1: What peak traffic should CampusPulse support during Orientation Week?
- Q2: Which accessibility standard and screen readers should be used for formal acceptance testing?