class Time:
    def get_time(years, months, days):
        total_years = years+(months/12)+(days/365)
        return round(total_years, 2)
    
class Interest:
    def Simple_interest(principal, rate, total_time):
        total_interest = principal*total_time*(rate/100)
        return round(total_interest, 2)
    
years = int(input("Enter year: "))
months = float(input("Enter months: "))
days = float(input("Enter the days: "))
principal = int(input("Principal: "))
rate = float(input("Rate (in %): "))

total_time = Time.get_time(years, months, days)
total_interest = Interest.Simple_interest(principal, rate, total_time)

print(f"Total time in years is {total_time} years")
print(f"Total interest earned is $ {total_interest}")