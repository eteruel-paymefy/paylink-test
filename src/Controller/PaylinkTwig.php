<?php
// src/Controller/PaylinkTwigController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PaylinkTwigController extends AbstractController
{
    #[Route('/paylink/twig')]
    public function main(): Response
    {
        $data = [
            'name' => 'Luis',
            'age' => 25
        ];

        return $this->render('paylink/twig-components.html.twig', [
            'name' => $data['name'],
            'age' => $data['age']
        ]);
    }
}