# Registration Link Mapping Plan

## Links Array (138 total)
Based on the webpage order from http://www.imagymnationgymnastics.com/---all----classes--.html

## Webpage Order Analysis
The webpage shows classes in this order:
1. **Beginner 6+ Gymnastics** (15 classes) - indices 0-14
2. **Ninjas Beg/Int 5+** (3 classes) - indices 15-17
3. **Ninjas Int/Adv** (1 class) - index 18
4. **Diaper Daredevils** (5 classes) - indices 19-23
5. **Tumble Tots** (23 classes) - indices 24-46
6. **Advanced Invitational** (2 classes) - indices 47-48
7. **Int/Adv (Bright/Shooting)** (8 classes) - indices 49-56
8. **Intermediate (Star/Mighty)** (22 classes) - indices 57-78
9. **Mini Monkey** (11 classes) - indices 79-89
10. **Busy Babies** (5 classes) - indices 90-94
11. **Kids Inv. (Mighty/Super/Mega)** (6 classes) - indices 95-100
12. **Gym/Mighty Kids** (11 classes) - indices 101-111
13. **KinderKids** (19 classes) - indices 112-130
14. **Diaper/Mini** (7 classes) - indices 131-137

Total: 138 classes ✓

## File Order (classes.ts)
1. Baby (36 total):
   - Busy Babies: 5
   - Diaper Daredevils: 5
   - Mini Monkey: 11
   - Diaper/Mini: 5
   
2. Kindergym (74 total):
   - Tumble Tots: 23
   - KinderKids: 19
   - Gym/Mighty Kids: 11
   - Kids Inv: 6
   
3. Gymnastics (64 total):
   - Beginner 6+: 15
   - Intermediate (Star/Mighty): 22
   - Int/Adv (Bright/Shooting): 8
   - Advanced Invitational: 2
   
4. Ninjas (4 total):
   - Ninjas Beg/Int: 3
   - Ninjas Int/Adv: 1

## Mapping Strategy
Map webpage indices to file positions:
- Webpage indices 0-14 → Gymnastics Beginner 6+ (file positions)
- Webpage indices 15-17 → Ninjas Beg/Int (file positions)
- Webpage index 18 → Ninjas Int/Adv (file position)
- Webpage indices 19-23 → Baby Diaper Daredevils (file positions)
- Webpage indices 24-46 → Kindergym Tumble Tots (file positions)
- Webpage indices 47-48 → Gymnastics Advanced (file positions)
- Webpage indices 49-56 → Gymnastics Int/Adv (file positions)
- Webpage indices 57-78 → Gymnastics Intermediate (file positions)
- Webpage indices 79-89 → Baby Mini Monkey (file positions)
- Webpage indices 90-94 → Baby Busy Babies (file positions)
- Webpage indices 95-100 → Kindergym Kids Inv (file positions)
- Webpage indices 101-111 → Kindergym Gym/Mighty (file positions)
- Webpage indices 112-130 → Kindergym KinderKids (file positions)
- Webpage indices 131-137 → Baby Diaper/Mini (file positions)
