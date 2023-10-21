<?php
// src/Controller/PaylinkController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PaylinkController extends AbstractController
{
    #[Route('/paylink')]
    public function main(): Response
    {
        $data = [
            'name' => 'Luis',
            'age' => 25
        ];

        return $this->render('paylink/v1.html.twig', [
            'name' => $data['name'],
            'age' => $data['age']
        ]);
    }
}