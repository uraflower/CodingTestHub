function solution(bandage, health, attacks) {
    let currentHealth = health;
    let attacksCopied = [...attacks];
    
    const lastAttackTime = attacksCopied[attacksCopied.length - 1][0];
    let [bandageTime, bandageHealPerSecond, bandageHealBonus] = bandage;
    let [attackTime, attackDamage] = attacksCopied.shift();
    
    for(let time = 0, successCnt = 0; time <= lastAttackTime; time += 1, successCnt += 1) {
        if (time === attackTime) {
            currentHealth -= attackDamage;
            successCnt = 0;
            if (attacksCopied.length) {
                [attackTime, attackDamage] = attacksCopied.shift();
            }
            if (currentHealth <= 0) {
                return -1;
            }
            continue;
        }
        
        
        currentHealth += bandageHealPerSecond;
        if (successCnt === bandageTime) {
            currentHealth += bandageHealBonus;
            successCnt = 0;
        }
        if (currentHealth > health) {
            currentHealth = health;
        }
    }
    
    return currentHealth;
}