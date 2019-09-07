#!/usr/bin/env python
# coding: utf-8

# In[2]:


import pandas as pd


# In[4]:


path = r"C:\Users\nahie\Desktop\SMU Assignments\Unit_03_Python\Instructions\PyBank\Resources\budget_data.csv"


# In[8]:


budget = pd.read_csv(path)


# In[70]:


budget.head(26)
            


# In[21]:


total_rows = budget.Date.count()
total_rows
# print (total_rows +1)


# In[23]:


total_profit = budget["Profit/Losses"].sum()
total_profit


# In[24]:


total_profit/ total_rows


# In[56]:


changes = []
for indx, row in budget.iterrows():
    #print(indx, row['Date'], row['Profit/Losses'])
    
    if (indx < 85):
        change = budget['Profit/Losses'][indx+1] - row['Profit/Losses']
        #print(change)
        changes.append(change)
    


# In[86]:


avg_change = sum(changes)/85


# In[60]:


max_value = max(changes)
min_value = min(changes)


# In[62]:


print (max_value)


# In[63]:


print (min_value)


# In[73]:


max_change = changes.index(max_value)


# In[74]:


min_change = changes.index(min_value)


# In[85]:


max_month = budget.iloc[max_change + 1].Date
print (max_month)


# In[84]:


min_month = budget.iloc[min_change + 1].Date
print (min_month)


# In[90]:


output = (
    f"\nFinancial Analysis\n"
   f"----------------------------\n"
   f"Total Months: {total_rows}\n"
   f"Total: ${total_profit}\n"
   f"Average Change: ${avg_change}\n"
   f"Greatest Increase in Profit: {max_month} (${max_value})\n"
   f"Greatest Decrease in Profit: {min_month} (${min_value})\n")
   


# In[91]:


output


# In[92]:


text_file = open("Output.txt", "w")
text_file.write(output)
text_file.close()


# In[ ]:




