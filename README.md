## Title

Disney Dreaming
https://disney-api-version2.vercel.app/
## Description/User Story

This is a application created with Angular, Typescript, BootstrapJS.
We wanted to create cards that the user is able to view and add to a card deck.
The User will be able to add a disney character cards to their card deck to view their selections.
The User will be able to search different characters using the search bar feature located on the header.
The User will be able to see all details of a specific character (when available) by clicking the "details" button on each character card.
User can delete a character card from your deck.
The User will have links to our social medias on the footer.

## Table of Contents
- [Title](#title)
- [Description](#description)
- [Features](#features)
- [On Arrival](#on-arrival)
- [License](#license)
- [Bio](#bio)
- [Links](#links)

Find new disney character that you didn't know about before with our app.

## Features 

- **Standalone App:** This is a standolne application built in the Angular framework.
- **Modules:** Modules were used for better organization, in accordance with proper Angular file structure.
- **Services:** Services were used to create functional communications with the front and back end of the application.
- **Components:** Components were used to store specific parts of the application's functionality, in accordance with proper Angular file structure.
- **Routing:** The application uses angular routing for navigation between the app's components, in accordance with proper Angular file structure.


## Docker Set Up

docker build -t angular-dev .

docker run -p 4200:4200 angular-dev

## On Arrival 
Ensure to run the following commands 

1. `npm i` 
2. `node server/seed.js` 
3. `npm run server-dev`
4. In the public folder, run `npx ng start`

## License

This project is under the MIT License. 

## Bio

Justin Berg and Daniel Paiz worked on this project.  This is project is built around a disney API utilizing the Angular framework.

## Links 

Github: https://github.com/justinberg97  | https://github.com/DannyPaiz
LinkedIn: https://www.linkedin.com/in/justin-berg-07409518a/
Email: justinmberg97@gmail.com


📋 Sprint/Dev Plan for PRODEVOMIG-769 to PRODEVOMIG-776

Summary:

You have 8 main Jira stories focused on adding new products/product offerings and order types to VWP Quote and Direct to Order (DTO) screens, following the existing “generic order/quote flow.”
	•	Most functionality already exists — you mainly need to add new entries to dropdowns, ensure proper flow, and validate visibility in Worklist and Work Manager.
	•	Minimal backend changes (assuming APIs fetch from product catalog updates).
	•	Mostly frontend wiring/config updates.

    📅 Sprint Planning:

    Sprint
Scope
Estimated Duration
Notes
Sprint 1
Add products/product offerings to dropdowns for VWP Quote + DTO (Stories 769â€“774)
2 weeks
Focus on initial feature development.
Sprint 2
Add new Order Types (Disconnect, Move - Stories 775â€“776), regression testing, bug fixes, UAT prep
2 weeks
Clean up, test fully, prepare for UAT handoff.
UAT Phase
Full UAT Testing (internal + POC review)
1 week
Small fixes after if needed.


🛠 Task List with Time Estimates

Task
Est. Time
Notes
PRODEVOMIG-769: Add â€œData Center Colocationâ€ + â€œSpace and Powerâ€ to Quote flow
1 day
Frontend dropdown + verify quote flow.
PRODEVOMIG-770: Add â€œData Center Colocationâ€ + â€œSpace and Powerâ€ to DTO flow
1 day
Same as above but for Direct to Order.
PRODEVOMIG-771: Add â€œUniCert KeyToolsâ€ under â€œRetail - Global Servicesâ€ in DTO
1 day
Add nested dropdown logic.
PRODEVOMIG-772: Add â€œGenericâ€ Product and â€œOtherâ€ Offering to DTO
1.5 days
â€œOtherâ€ must be only option for â€œGenericâ€. Minor extra logic needed.
PRODEVOMIG-773: Add â€œLinear Global Data Linkâ€ under â€œWavelength Solutionsâ€ in DTO
0.5 days
Simple dropdown addition.
PRODEVOMIG-774: Add â€œInternational Voice Servicesâ€ + 5 Offerings to DTO
1.5 days
Multiple offerings; need careful dropdown population.
PRODEVOMIG-775: Add â€œDisconnectâ€ to Order Type
1 day
New option across products; verify integration.
PRODEVOMIG-776: Add â€œMoveâ€ to Order Type
1 day
Same as above.
Testing Each Story (unit & functional)
3 days
Manual testing + possible small bug fixes.
Integration Testing (Worklists, Work Manager visibility)
2 days
Confirm orders flow correctly end-to-end.
UAT Prep (code freeze, deploy to UAT)
0.5 days
Build and deploy UAT release.
UAT Support + Small Fixes
1â€“2 days
Based on feedback.


⏳ Total Effort
	•	~ 14 - 15 work days (~3 weeks for feature development + testing)
	•	Need 2 full sprints (because your Fridays are unavailable)
	•	1 additional week for UAT + fixes

    📈 UAT Timeline

    Phase
Date Range (tentative)
Notes
Development
Sprint 1 (Weeks 1â€“2)
Build basic features
Development + Finalization
Sprint 2 (Weeks 3â€“4)
Complete â€œMoveâ€ and â€œDisconnectâ€ + Integration Testing
UAT Preparation
End of Sprint 2
Deploy to UAT environment
UAT Execution
Week 5
Internal/external users run test cases
UAT Fixes and Final Release
Week 6 (if needed)
Minor patches if issues found


🗒 Clean Copy (for sending to POC/dev lead)

⸻

Sprint/Dev Plan: VWP DTO/Quote Enhancements (PRODEVOMIG-769 to 776)

Overview:
Implement new products, product offerings, and order types into the existing VWP Quote and Direct to Order (DTO) workflows, following the generic order/quote processes. Minor UI adjustments, dropdown updates, and flow validation required.

⸻

Sprint Plan:
	•	Sprint 1 (2 weeks): Implement product and product offering additions (PRODEVOMIG-769 to PRODEVOMIG-774).
	•	Sprint 2 (2 weeks): Implement new order types (Disconnect, Move), regression testing, integration verification, UAT preparation.
	•	UAT Phase (1 week): Internal and external user acceptance testing.

    Task List : 

    Story
Task
Est. Time
PRODEVOMIG-769
Add â€œData Center Colocationâ€ and â€œSpace and Powerâ€ in VWP Quote flow
1 day
PRODEVOMIG-770
Add â€œData Center Colocationâ€ and â€œSpace and Powerâ€ in VWP DTO flow
1 day
PRODEVOMIG-771
Add â€œRetail - Global Servicesâ€ with â€œUniCert KeyToolsâ€ Offering in DTO
1 day
PRODEVOMIG-772
Add â€œGenericâ€ Product and â€œOtherâ€ Offering (special dropdown behavior)
1.5 days
PRODEVOMIG-773
Add â€œLinear Global Data Linkâ€ under â€œWavelength Solutionsâ€ in DTO
0.5 days
PRODEVOMIG-774
Add â€œInternational Voice Servicesâ€ + 5 product offerings in DTO
1.5 days
PRODEVOMIG-775
Add â€œDisconnectâ€ to Order Type
1 day
PRODEVOMIG-776
Add â€œMoveâ€ to Order Type
1 day
Testing (unit + functional)
3 days
Integration Testing (Worklists/Work Manager Validation)
2 days
UAT Prep + Support
1.5â€“2 days

Total Timeline:
	•	Feature Development: 4 weeks (Mon–Thurs work schedule).
	•	UAT Phase: 1 week.
	•	Release/Wrap-up: Week 6.

⸻

✅ Final Notes:
	•	Fridays are unavailable for development work.
	•	Most functionality relies on existing APIs and frameworks — no major backend changes expected.
	•	End-to-end testing needed to verify dropdowns and order submission.
	•	UAT will validate dropdown entries, order submission, and Worklists/Work Manager visibility.

    Here’s a full Sprint Plan / Dev Plan, Task List, and UAT Timeline based on your stories and context.
I organized it cleanly so you can easily send it to your POC for review.

⸻

📋 Sprint/Dev Plan for VWP Product Offerings Enhancement

🗓 Sprint Length
	•	2 weeks (Mon–Thu availability due to Friday training)

🔥 Key Considerations
	•	Functionality largely exists — implementation mainly involves adding new Products/Product Offerings to dropdowns and verifying order/quote flow.
	•	Must ensure new products/orders appear correctly in Worklists and Work Manager.
	•	Testing is crucial to verify dropdowns, flows, and submission correctness.

🎯 Goals
	•	Add 8 product/offering options across VWP Quote, Direct to Order (DTO), and generic flows.
	•	Add 2 new Order Types (Disconnect, Move) to DTO generic flow.
	•	Ensure all follow the generic quote/order processes correctly.
	•	Validate visibility of quotes/orders in Worklists and Work Manager.

    🛠 Task List (with Time Estimates)

    #
Task
Story ID(s)
Est. Hours
Notes
1
Add â€œData Center Colocationâ€ & â€œSpace and Powerâ€ to VWP Quote
PRODEVOMIG-769
5h
Update dropdowns, verify submission
2
Add â€œData Center Colocationâ€ & â€œSpace and Powerâ€ to DTO
PRODEVOMIG-770
5h
Similar to above but DTO path
3
Add â€œUniCert KeyToolsâ€ under â€œRetail - Global Servicesâ€ in DTO
PRODEVOMIG-771
5h
New offering under existing product
4
Add â€œGenericâ€ Product with â€œOtherâ€ Offering
PRODEVOMIG-772
6h
Slight logic adjustment: â€œOtherâ€ only shown when â€œGenericâ€ is selected
5
Add â€œLinear Global Data Linkâ€ under â€œWavelength Solutionsâ€
PRODEVOMIG-773
5h
Straightforward new offering addition
6
Add â€œInternational Voice Servicesâ€ and 5 Sub-products
PRODEVOMIG-774
7h
Heavier â€” multiple offerings to one product
7
Add â€œDisconnectâ€ Order Type in DTO
PRODEVOMIG-775
4h
New dropdown option, slight order flow adjustment
8
Add â€œMoveâ€ Order Type in DTO
PRODEVOMIG-776
4h
Similar work to Disconnect
9
Testing: Internal validation across all paths
ALL
8h
Includes Shop/Quote, Shop/DTO, Worklists, Work Manager checks
10
UAT Support (bug fixes, adjustments)
ALL
6h
Handle findings during UAT


🏗 Sprint Planning

Sprint
Tasks
Comments
Sprint 1
Tasks 1â€“5
Product dropdowns, offerings; 1 major test cycle
Sprint 2
Tasks 6â€“8 + Testing + UAT Fixes
Finish voice products, order types, and full testing support


🧠 Estimated Timeline
	•	Sprint 1 (2 weeks):
	•	Complete Tasks 1–5
	•	Start testing related to added dropdowns and generic flows
	•	Sprint 2 (2 weeks):
	•	Complete Tasks 6–8
	•	Perform full testing
	•	Address UAT findings
	•	UAT Timeline:
	•	Start UAT at beginning of Sprint 2, Week 2 (around Day 7–8)
	•	UAT duration: 1 week
	•	Close UAT by Sprint 2 end

    📅 High-Level Timeline View

    Phase
Dates (Example)
Deliverables
Sprint 1 (Build Phase 1)
May 6 â€“ May 16
Data Center, UniCert, Generic Product, LGDL
Sprint 2 (Build Phase 2 + UAT)
May 20 â€“ May 30
Voice Products, Disconnect/Move, Full Testing
UAT
May 27 â€“ May 30
Validation and Bug Fixes
Ready for Release
End of May / Early June
Deployment


✅ Assumptions
	•	APIs already fetch catalog data correctly.
	•	No need to build new APIs — only UI/product config changes.
	•	Generic Order/Quote processes do not need redesign — only validation with new products.

⸻

📢 Risks/Challenges
	•	Unexpected API/data mapping issues.
	•	Dropdown dependencies not configured correctly.
	•	Generic flow variations if business rules differ slightly for new products (unlikely but possible).

⸻

✨ Notes for Your POC

	As this is my first coding project for the team, I have built in slight buffer time assuming it may take longer to ramp up.
I prioritized based on simplicity and logical flow (Products/Offerings first, Order Types next).
Testing is emphasized heavily to ensure clean UAT.
⸻

Subject: Sprint Plan and Timeline for VWP Product Enhancements

⸻

Hi [POC’s Name],

Hope you’re doing well!

Attached (or below) is the Sprint/Dev Plan and UAT Timeline for the VWP Product Offerings Enhancement work.
I structured it to cover:
	•	Tasks, story mappings, and estimates
	•	Sprint-by-sprint goals
	•	UAT planning and timeline
	•	Key assumptions and risks

Highlights:
	•	Focused mainly on updating product dropdowns and ensuring correct quote/order flow.
	•	Minimal backend/API impacts expected — primarily front-end and validation updates.
	•	Full internal testing planned before UAT to ensure a smooth handoff.

Given this is my first coding project for the team, I built in a small ramp-up buffer into the estimates to make sure we stay on track.

Please let me know if you’d like me to adjust anything or prioritize differently — happy to tweak based on your feedback!

Thanks so much,
[Your Name]

⸻

Quick Tip:
If you want to look super on top of it, you could also say in a postscript (P.S.):

	“P.S. I’m also preparing a checklist of post-UAT tasks (final code cleanup, feature toggle review if needed) — can share that as well if helpful.”

⸻

Would you also want a “super short version” of this email (like 2-3 lines) in case you want an even faster heads-up message too? 🚀