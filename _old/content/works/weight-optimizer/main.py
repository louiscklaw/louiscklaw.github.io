#!/usr/bin/env python

	
goods_list = [
    ['YT7313101054478'	,0.61],	
    ['78700163974086'	,0.26],	
    ['JT3037241652100'	,0.52],	
    ['78351316346143'	,0.14],	
    ['78703902122837'	,0.04],	
    ['78704029884981'	,0.08],	
    ['78704453347671'	,0.16],	
    ['773232924552468'	,0.58],	
    ['78706453296498'	,0.14],	
    ['78706360724868'	,0.32],	
    ['773233701998710'	,0.48],
]
weights = [x[1] for x in goods_list]

sum_all_weights = sum(weights)
rounded_sum_all_weight = round(sum_all_weights)
print(f'{rounded_sum_all_weight} Kg')
wanted_weight = 3

def select_items(goods_list, wanted_weight):
    weights = [x[1] for x in goods_list]
    selected_items = []
    total_weight = 0

    for weight in sorted(weights, reverse=True):
        if total_weight + weight <= wanted_weight:
            goods_id = list(filter(lambda x: x[1] == weight,goods_list ))[0][0]
            selected_items.append([goods_id,weight])
            total_weight += weight

    # Check if we are just below 1 kg and can add one more item
    remaining_weight = wanted_weight - total_weight

    if remaining_weight > 0 and remaining_weight < min(weights):
        for weight in sorted(weights):
            if remaining_weight >= weight:
                selected_items.append([0,weight])
                remaining_weight -= weight
                total_weight += weight
                if total_weight == wanted_weight:
                    break

    return selected_items

for i in range(1,rounded_sum_all_weight+1,1):
    selected_items = select_items(goods_list, i)
    selected_items_weight = [x[1] for x in selected_items]
    print(selected_items_weight)
    rounded_selected_items = round(sum(selected_items_weight), 2)
    weight_diff = round(i - rounded_selected_items, 2)

    print(f'wanted weight: {i}')
    print(f'weight diff: {i} - {rounded_selected_items} {weight_diff}')
    for item in selected_items:
        print(item[0])
    print()