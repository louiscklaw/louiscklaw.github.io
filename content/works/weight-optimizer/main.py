#!/usr/bin/env python

wanted_weight = 2

def select_items(weights):
    selected_items = []
    total_weight = 0

    for weight in sorted(weights, reverse=True):
        if total_weight + weight <= wanted_weight:
            selected_items.append(weight)
            total_weight += weight

    # Check if we are just below 1 kg and can add one more item
    remaining_weight = wanted_weight - total_weight

    if remaining_weight > 0 and remaining_weight < min(weights):
        for weight in sorted(weights):
            if remaining_weight >= weight:
                selected_items.append(weight)
                remaining_weight -= weight
                total_weight += weight
                if total_weight == wanted_weight:
                    break

    return selected_items

weights = [0.16, 0.14, 0.5, 0.61, 0.19, 0.61]
selected_items = select_items(weights)

print(selected_items)

print(sum(selected_items))
