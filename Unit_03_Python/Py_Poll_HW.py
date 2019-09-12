import csv

# Initialize results dictionary
results = {}

# Process csv file
with open ('election_data.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            line_count += 1
        else:
            if row[2] in results.keys():
                results[row[2]] += 1
            else:
                results[row[2]] = 1

    # Calculate voting stats
    total_votes = sum(results.values())
    max_votes = max(results.values())

    # Generate output
    winner = ''
    output = 'Election Results'
    output += '\n-------------------------'
    output += f'\nTotal votes: {total_votes}'
    output += '\n-------------------------'
    for key in results:
        output += f'\n{key}: {round((results[key] / total_votes) * 100, 3)}% ({results[key]})'
        if results[key] == max_votes:
            winner = key
    output += '\n-------------------------'
    output += f'\nWinner: {winner}'
    output += '\n-------------------------' 
    print(output)

    # Write output file to election_results.txt
    f = open( 'election_results.txt', 'w' )
    f.write( output )
    f.close()

    


