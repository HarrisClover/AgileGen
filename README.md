# AgileGen

- A generative software development agent for human-computer collaboration initiated from the perspective of end-users.

# Overview 📄

![框架图_01](https://github.com/HarrisClover/AgileGen/assets/33628813/e41c642e-50bb-43a9-860c-9203aae0bc46)

The interaction and collaboration design of AgileGen is divided into two parts.

(1) End-user Decision-Making is used to collaborate with end-users to collect and clarify end-user decisions.

(2) AgileGen Agent responds to user decisions by transforming and analyzing them, aiming to guide LLMs in generating software code consistent with user requirements. Scenarios Design and Rapid Prototype Design are two core components of the Agile Sapper.

- The Scenarios Design component is primarily used to design different scenarios represented in Gherkin language based on decision-making requirements, submit them to end-users for scenario decisions, and return the decided Gherkin scenarios.
- The Rapid Prototype Design component is responsible for generating software application code based on the decided Gherkin scenarios. It then presents the software application to users for acceptance, receives user feedback and suggestions, and makes necessary modifications to the code.

---

# ❓**What Can AgileGen (Sapper4SE) Do?**

---

[Sapper4SE-20230924.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f89dece3-44bb-44eb-b4ce-e6d3d96d111a/cf9277ef-e01f-4e3e-a67b-54f4eda6c626/Sapper4SE-20230924.mp4)

---

# ✈️Quick start

1. Configure your OpenAI key and VPN in utils/CodeGeneration.py
2. python ./main.py
3. Running on local URL:  http://127.0.0.1:0000 (your VPN)
