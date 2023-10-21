<?php
// src/Twig/Components/Alert.php

namespace App\Twig;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
class PaymentMethodComponent
{
    public string $type = 'visa';
    public int $amount;
    public string $currency = '€';

    public function getPaymentMethod(): string
    {
        return match ($this->type) {
            'visa' => 'Visa',
            'bizum' => 'Bizum',
            'paypal' => 'Paypal',
        };
    }
}